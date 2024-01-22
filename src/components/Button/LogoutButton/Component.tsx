'use client';
import { useRouter } from 'next/navigation';
import Button from '../Button';

const Component = ({
  className = '',
  handleLogout,
}: {
  className?: string;
  handleLogout: () => void;
}) => {
  const router = useRouter();
  return (
    <Button
      className={className}
      text={'Logout'}
      onClick={() => {
        handleLogout();
        router.refresh();
      }}
    />
  );
};
export default Component;
