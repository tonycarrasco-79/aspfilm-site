// Shared by the contact form (client) and the inquiry server function.
export const ESSENTIALS_TYPE = "Small business (ASP Essentials)";

export const PODCAST_TYPE = "Podcast";

export const PROJECT_TYPES = [
  "Series or documentary",
  "Branded content",
  "School, nonprofit or agency",
  ESSENTIALS_TYPE,
  PODCAST_TYPE,
  "Something else",
];

// Fired by "Request a shoot day" so the contact form preselects Essentials.
export const PROJECT_TYPE_EVENT = "asp:project-type";

export function selectProjectType(type: string) {
  window.dispatchEvent(new CustomEvent<string>(PROJECT_TYPE_EVENT, { detail: type }));
}
