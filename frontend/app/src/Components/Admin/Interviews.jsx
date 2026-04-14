import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarClock, Trash2 } from "lucide-react";
 
const BASE_URL = "https://farrandly-interalar-talon.ngrok-free.dev";
const INTERVIEW_API = `${BASE_URL}/api/Interview`;
const APPLICATIONS_API = `${BASE_URL}/api/JobApplications`;
const MANAGER_API = `${BASE_URL}/api/Managers`;
 
const initialForm = {
  candidateId: "",
  interviewDate: "",
  interviewTime: "",
  managerId: "",
  mode: "Online",
  meetingLink: "",
  notes: "",
};
 
const Interviews = () => {
  const navigate = useNavigate();
  const [interviews, setInterviews] = useState([]);
  const [shortlistedCandidates, setShortlistedCandidates] = useState([]);
  const [managers, setManagers] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [deleteInterview, setDeleteInterview] = useState(null);
  const [editingInterview, setEditingInterview] = useState(null);

  const selectedCandidate = shortlistedCandidates.find(
    (candidate) => String(candidate.id) === String(form.candidateId)
  );

  const selectedManager = managers.find(
    (manager) => String(manager.id) === String(form.managerId)
  );
 
  const getHeaders = () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return {};
    }
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    };
  };
 
  const fetchInterviews = async () => {
    try {
      const res = await fetch(INTERVIEW_API, { headers: getHeaders() });
      const data = await res.json();
      setInterviews(data);
    } catch (err) {
      console.error("Interview fetch error:", err);
    }
  };
 
  const fetchCandidates = async () => {
    try {
      const res = await fetch(APPLICATIONS_API, { headers: getHeaders() });
      const data = await res.json();
      const filtered = (Array.isArray(data) ? data : data.data || []).filter(
        (x) => x.status?.toLowerCase() === "shortlisted"
      );
      setShortlistedCandidates(filtered);
    } catch (err) {
      console.error("Candidate fetch error:", err);
    }
  };
 
  const fetchManagers = async () => {
    try {
      const res = await fetch(MANAGER_API, { headers: getHeaders() });
      if (!res.ok) throw new Error("Manager fetch failed");
      const data = await res.json();
      const list = Array.isArray(data) ? data : data.data || data.managers || [];
      const mapped = list.map((m) => ({
        id: m.id,
        name: m.name,
        email: m.email,
      }));
      setManagers(mapped);
    } catch (err) {
      console.error("Manager fetch error:", err);
    }
  };
 
  useEffect(() => {
    fetchInterviews();
    fetchCandidates();
    fetchManagers();
  }, []);
 
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingInterview(null);
  };

  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const formatTime = (value) => {
    if (!value) return "";

    const trimmed = String(value).slice(0, 5);
    const [hourText = "", minuteText = ""] = trimmed.split(":");
    const hour = Number(hourText);
    const minute = Number(minuteText);

    if (Number.isNaN(hour) || Number.isNaN(minute)) {
      return trimmed;
    }

    return new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(2000, 0, 1, hour, minute));
  };

  const formatSchedule = (interview) => {
    const dateText = formatDate(interview.scheduledAt || interview.interviewDate);
    const timeText = formatTime(interview.interviewTime);

    if (dateText && timeText) {
      return `${dateText}, ${timeText}`;
    }

    return dateText || timeText;
  };

  const handleRescheduleClick = (interview) => {
    setEditingInterview(interview);
    setForm({
      candidateId: String(interview.applicationId ?? interview.candidateId ?? ""),
      interviewDate:
        interview.interviewDate ||
        (interview.scheduledAt ? String(interview.scheduledAt).slice(0, 10) : ""),
      interviewTime: String(interview.interviewTime || "").slice(0, 5),
      managerId: String(interview.managerId ?? ""),
      mode: interview.mode || "Online",
      meetingLink: interview.meetingLink || "",
      notes: interview.notes || "",
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.candidateId) {
      alert("Please select candidate");
      return;
    }
    if (!form.managerId) {
      alert("Please select manager");
      return;
    }
    if (!form.interviewDate || !form.interviewTime) {
      alert("Please select date and time");
      return;
    }
    if (form.mode === "Online" && !form.meetingLink) {
      alert("Meeting link required for online interview");
      return;
    }
 
    const payload = editingInterview
      ? {
          interviewDate: form.interviewDate,
          interviewTime: `${form.interviewTime}:00`,
          mode: form.mode.toLowerCase(),
          meetingLink: form.meetingLink || "",
          notes: form.notes || "",
          managerId: Number(form.managerId),
          status: "rescheduled",
        }
      : {
          applicationId: Number(form.candidateId),
          interviewDate: form.interviewDate,
          interviewTime: `${form.interviewTime}:00`,
          managerId: Number(form.managerId),
          mode: form.mode,
          meetingLink: form.meetingLink || "",
          notes: form.notes || "",
        };
 
    console.log("Submitting payload:", payload);
 
    try {
      setSaving(true);
      const res = await fetch(
        editingInterview ? `${INTERVIEW_API}/${editingInterview.id}` : INTERVIEW_API,
        {
          method: editingInterview ? "PUT" : "POST",
          headers: getHeaders(),
          body: JSON.stringify(payload),
        }
      );
      const result = await res.text();
      console.log("API RESPONSE:", result);
      if (!res.ok) throw new Error(result);
      alert("Interview Scheduled Successfully âœ…");
      resetForm();
      fetchInterviews();
    } catch (err) {
      console.error("Submit error:", err);
      alert("Error: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteInterview = async () => {
    if (!deleteInterview) {
      return;
    }

    try {
      const res = await fetch(`${INTERVIEW_API}/${deleteInterview.id}`, {
        method: "DELETE",
        headers: getHeaders(),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Delete failed");
      }

      setInterviews((current) =>
        current.filter((interview) => interview.id !== deleteInterview.id)
      );
      setDeleteInterview(null);
    } catch (err) {
      console.error("Interview delete error:", err);
      alert("Error: " + err.message);
    }
  };
 
  return (
<div
      style={{
        padding: "28px",
        background: "linear-gradient(180deg, #f7fbff 0%, #eef5fb 100%)",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: "24px" }}>
          <div
            style={{
              display: "inline-flex",
              padding: "7px 12px",
              borderRadius: "999px",
              background: "#dbeafe",
              color: "#1d4ed8",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Interview Workflow
          </div>
          <h2 style={{ margin: "0 0 8px", fontSize: "32px", color: "#102a43" }}>
            Interview Module
          </h2>
          <p style={{ margin: 0, color: "#5b7083", maxWidth: "60ch", lineHeight: 1.7 }}>
            Schedule interviews for shortlisted candidates and keep a clean view of every
            assigned interview in one place.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(360px, 420px) minmax(0, 1fr)",
            gap: "24px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #d9e4f0",
              borderRadius: "24px",
              padding: "24px",
              boxShadow: "0 20px 40px rgba(15, 23, 42, 0.06)",
            }}
          >
            <div style={{ marginBottom: "18px" }}>
              <h3 style={{ margin: "0 0 8px", color: "#12314a", fontSize: "22px" }}>
                Schedule Interview
              </h3>
              <p style={{ margin: 0, color: "#64748b", lineHeight: 1.6 }}>
                {editingInterview
                  ? "Update the interview date, time, or manager and save the new schedule."
                  : "Pick a candidate, assign a manager, and schedule the interview without changing any existing workflow."}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "12px",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  padding: "14px",
                  borderRadius: "18px",
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                }}
              >
                <div style={{ fontSize: "12px", color: "#1d4ed8", fontWeight: 700 }}>
                  Shortlisted
                </div>
                <strong style={{ display: "block", marginTop: "6px", fontSize: "24px", color: "#0f172a" }}>
                  {shortlistedCandidates.length}
                </strong>
              </div>
              <div
                style={{
                  padding: "14px",
                  borderRadius: "18px",
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                }}
              >
                <div style={{ fontSize: "12px", color: "#15803d", fontWeight: 700 }}>
                  Managers
                </div>
                <strong style={{ display: "block", marginTop: "6px", fontSize: "24px", color: "#0f172a" }}>
                  {managers.length}
                </strong>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "8px", color: "#334155", fontWeight: 600 }}>
                Candidate
                <select
                  value={form.candidateId}
                  onChange={(e) => handleChange("candidateId", e.target.value)}
                  style={{
                    minHeight: "48px",
                    borderRadius: "14px",
                    border: "1px solid #d7e0ea",
                    padding: "12px 14px",
                    background: "#fff",
                  }}
                >
                  <option value="">Select Candidate</option>
                  {shortlistedCandidates.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} - {c.jobTitle}
                    </option>
                  ))}
                </select>
              </label>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "8px", color: "#334155", fontWeight: 600 }}>
                  Date
                  <input
                    type="date"
                    value={form.interviewDate}
                    onChange={(e) => handleChange("interviewDate", e.target.value)}
                    style={{
                      minHeight: "48px",
                      borderRadius: "14px",
                      border: "1px solid #d7e0ea",
                      padding: "12px 14px",
                    }}
                  />
                </label>

                <label style={{ display: "flex", flexDirection: "column", gap: "8px", color: "#334155", fontWeight: 600 }}>
                  Time
                  <input
                    type="time"
                    value={form.interviewTime}
                    onChange={(e) => handleChange("interviewTime", e.target.value)}
                    style={{
                      minHeight: "48px",
                      borderRadius: "14px",
                      border: "1px solid #d7e0ea",
                      padding: "12px 14px",
                    }}
                  />
                </label>
              </div>

              <label style={{ display: "flex", flexDirection: "column", gap: "8px", color: "#334155", fontWeight: 600 }}>
                Interview Manager
                <select
                  value={form.managerId}
                  onChange={(e) => handleChange("managerId", e.target.value)}
                  style={{
                    minHeight: "48px",
                    borderRadius: "14px",
                    border: "1px solid #d7e0ea",
                    padding: "12px 14px",
                    background: "#fff",
                  }}
                >
                  <option value="">Select Manager</option>
                  {managers.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.email})
                    </option>
                  ))}
                </select>
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: "8px", color: "#334155", fontWeight: 600 }}>
                Mode
                <select
                  value={form.mode}
                  onChange={(e) => handleChange("mode", e.target.value)}
                  style={{
                    minHeight: "48px",
                    borderRadius: "14px",
                    border: "1px solid #d7e0ea",
                    padding: "12px 14px",
                    background: "#fff",
                  }}
                >
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Phone">Phone</option>
                </select>
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: "8px", color: "#334155", fontWeight: 600 }}>
                Meeting Link / Location
                <input
                  type="text"
                  placeholder="Meeting Link or Location"
                  value={form.meetingLink}
                  onChange={(e) => handleChange("meetingLink", e.target.value)}
                  style={{
                    minHeight: "48px",
                    borderRadius: "14px",
                    border: "1px solid #d7e0ea",
                    padding: "12px 14px",
                  }}
                />
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: "8px", color: "#334155", fontWeight: 600 }}>
                Notes
                <textarea
                  placeholder="Notes"
                  value={form.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  style={{
                    minHeight: "110px",
                    borderRadius: "14px",
                    border: "1px solid #d7e0ea",
                    padding: "12px 14px",
                    resize: "vertical",
                  }}
                />
              </label>

              {(selectedCandidate || selectedManager) && (
                <div
                  style={{
                    display: "grid",
                    gap: "10px",
                    padding: "14px",
                    borderRadius: "18px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {selectedCandidate ? (
                    <div>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                        Selected Candidate
                      </div>
                      <div style={{ marginTop: "4px", color: "#0f172a", fontWeight: 700 }}>
                        {selectedCandidate.name}
                      </div>
                      <div style={{ color: "#64748b", fontSize: "14px" }}>
                        {selectedCandidate.jobTitle}
                      </div>
                    </div>
                  ) : null}
                  {selectedManager ? (
                    <div>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                        Assigned Manager
                      </div>
                      <div style={{ marginTop: "4px", color: "#0f172a", fontWeight: 700 }}>
                        {selectedManager.name}
                      </div>
                      <div style={{ color: "#64748b", fontSize: "14px" }}>
                        {selectedManager.email}
                      </div>
                    </div>
                  ) : null}
                </div>
              )}

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button
                  type="submit"
                  disabled={saving}
                  style={{
                    flex: "1 1 220px",
                    minHeight: "48px",
                    border: "none",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
                    color: "#fff",
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 18px 30px rgba(37, 99, 235, 0.22)",
                  }}
                >
                  {saving
                    ? "Saving..."
                    : editingInterview
                    ? "Save Reschedule"
                    : "Schedule Interview"}
                </button>
                {editingInterview ? (
                  <button
                    type="button"
                    onClick={resetForm}
                    style={{
                      flex: "0 1 140px",
                      minHeight: "48px",
                      borderRadius: "14px",
                      border: "1px solid #cbd5e1",
                      background: "#fff",
                      color: "#334155",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                ) : null}
              </div>
            </form>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #d9e4f0",
              borderRadius: "24px",
              padding: "24px",
              boxShadow: "0 20px 40px rgba(15, 23, 42, 0.06)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "flex-end", marginBottom: "18px" }}>
              <div>
                <h3 style={{ margin: "0 0 8px", color: "#12314a", fontSize: "22px" }}>
                  Interview List
                </h3>
                <p style={{ margin: 0, color: "#64748b", lineHeight: 1.6 }}>
                  Browse all scheduled interviews and monitor the current interview pipeline.
                </p>
              </div>
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: "16px",
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  color: "#1d4ed8",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                Total: {interviews.length}
              </div>
            </div>

            {interviews.length === 0 ? (
              <div
                style={{
                  padding: "26px",
                  borderRadius: "18px",
                  background: "#f8fafc",
                  border: "1px dashed #cbd5e1",
                  textAlign: "center",
                  color: "#64748b",
                }}
              >
                No interviews found
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {interviews.map((i) => (
                  <div
                    key={i.id}
                    style={{
                      border: "1px solid #dbe4ee",
                      padding: "18px",
                      borderRadius: "18px",
                      background: "linear-gradient(180deg, #ffffff, #f8fbff)",
                      boxShadow: "0 12px 24px rgba(15, 23, 42, 0.04)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "18px",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                      }}
                    >
                      <div style={{ display: "grid", gap: "8px" }}>
                        <div style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a" }}>
                          {i.candidateName}
                        </div>
                        <div style={{ color: "#475569" }}>{i.email}</div>
                        <div style={{ color: "#475569" }}>{i.jobTitle}</div>
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gap: "8px",
                          minWidth: "220px",
                          justifyItems: "end",
                        }}
                      >
                        <span
                          style={{
                            padding: "7px 12px",
                            borderRadius: "999px",
                            background:
                              i.status?.toLowerCase() === "completed"
                                ? "#dcfce7"
                                : i.status?.toLowerCase() === "rescheduled"
                                ? "#ede9fe"
                                : i.status?.toLowerCase() === "cancelled"
                                ? "#fee2e2"
                                : "#dbeafe",
                            color:
                              i.status?.toLowerCase() === "completed"
                                ? "#15803d"
                                : i.status?.toLowerCase() === "rescheduled"
                                ? "#7c3aed"
                                : i.status?.toLowerCase() === "cancelled"
                                ? "#b91c1c"
                                : "#1d4ed8",
                            fontSize: "12px",
                            fontWeight: 700,
                            textTransform: "capitalize",
                          }}
                        >
                          {i.status}
                        </span>
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                          <button
                            type="button"
                            onClick={() => handleRescheduleClick(i)}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              minHeight: "40px",
                              padding: "0 14px",
                              borderRadius: "999px",
                              border: "1px solid #bfdbfe",
                              background: "#eff6ff",
                              color: "#2563eb",
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            <CalendarClock size={14} />
                            Reschedule
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteInterview(i)}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              minHeight: "40px",
                              padding: "0 14px",
                              borderRadius: "999px",
                              border: "1px solid #fecaca",
                              background: "#fef2f2",
                              color: "#dc2626",
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            <Trash2 size={14} />
                            Delete
                          </button>
                        </div>
                        <div style={{ color: "#334155", fontWeight: 600 }}>{i.mode}</div>
                        {formatSchedule(i) ? (
                          <div style={{ color: "#64748b", fontSize: "14px" }}>
                            {formatSchedule(i)}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {(i.interviewer || i.notes || i.meetingLink) && (
                      <div
                        style={{
                          marginTop: "14px",
                          paddingTop: "14px",
                          borderTop: "1px solid #e2e8f0",
                          display: "grid",
                          gap: "8px",
                          color: "#475569",
                        }}
                      >
                        {i.interviewer ? <div><strong style={{ color: "#0f172a" }}>Manager:</strong> {i.interviewer}</div> : null}
                        {i.meetingLink ? <div><strong style={{ color: "#0f172a" }}>Link:</strong> {i.meetingLink}</div> : null}
                        {i.notes ? <div><strong style={{ color: "#0f172a" }}>Notes:</strong> {i.notes}</div> : null}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {deleteInterview && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Delete Interview</h3>
            <p>Delete interview scheduled for {deleteInterview.candidateName}?</p>
            <div className="modal-actions">
              <button type="button" onClick={() => setDeleteInterview(null)}>
                Cancel
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={handleDeleteInterview}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
</div>
  );
};
 
export default Interviews;
