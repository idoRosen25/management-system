import Link from 'next/link';
import { Routes } from '../../consts';

export default function Page() {
  return (
    <>
      <h1>This is user page</h1>
      <Link
        href={`http://localhost:3000${Routes.DASHBOARD}/0b3e5cb6-9d49-4e99-91a6-4b61d7844e36`}
      >
        Click here to open modal
      </Link>
    </>
  );
}