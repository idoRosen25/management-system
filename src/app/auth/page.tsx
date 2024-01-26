import LoginForm from '../../components/Auth/LoginForm';

export default function Auth() {
  return (
    <section className="bg-indigo-600 h-screen flex">
      <div className="bg-white border border-gray-500 w-[25rem] m-auto p-6 rounded-lg shdow-sm">
        <LoginForm />
      </div>
    </section>
  );
}
