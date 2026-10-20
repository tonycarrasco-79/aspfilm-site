-- Contact form submissions, kept as a backup to the email notification.
CREATE TABLE IF NOT EXISTS inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  org TEXT,
  email TEXT NOT NULL,
  type TEXT,
  budget TEXT,
  timeline TEXT,
  message TEXT,
  subject TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
