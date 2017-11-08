/**
 * Central config object for all route names -> path name pairings.
 * The client has three main routes: `submissionEditing`, `submissionPreview`,
 * `submissionSubmitted`.
 *
 * A normal editing process happens in the `submissionEditing` route. When a
 * student clicks *submit*, they are redirected to the `submissionPreview`
 * route where they can confirm their submission.
 *
 * If the Manifest comes in with the `status` field set to 'submitted', the
 * student should always be redirected to the `submissionSubmitted` route,
 * which displays a read-only, post submission view of their Work.
 *
 * The base prefix for every route is `/work/:workId`. The :workId route param
 * should be a server-side UUID in a production environment. For now, we just
 * match on anything.
 */
export const pathConfig = {
  base: '/work/:workId',
  submissionEditing: '/work/:workId/editing',
  submissionPreview: '/work/:workId/preview',
  submissionSubmitted: '/work/:workId/submitted',
  unauthorized: '/unauthorized',
};

export function buildPathForWork(workId) {
  return `/work/${workId}/editing`;
}

export function buildPathForPreview(workId) {
  return `/work/${workId}/preview`;
}

export function buildPathForSubmitted(workId) {
  return `/work/${workId}/submitted`;
}
