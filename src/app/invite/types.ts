import { Role } from '@prisma/client';

export type InvitePageSearchParams = {
  teamId: string;
  email?: string;
  role?: Role;
};
export type InvitePageProps = {
  params?: unknown;
  searchParams: InvitePageSearchParams;
};
