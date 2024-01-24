import { Spinner } from '@/components/Spinner';
export default function Loading() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-white bg-opacity-50 z-10 flex justify-center items-center">
      <Spinner mode="spinner" />
    </div>
  );
}
