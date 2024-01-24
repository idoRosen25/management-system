export type InvitePageSearchParams = {
  teamId: string;
  userEmail?: string;
};
export type InvitePageProps = {
  params?: unknown;
  searchParams: InvitePageSearchParams;
};
