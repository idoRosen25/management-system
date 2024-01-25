export default function Page() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-green-500">
      <div className="w-3/5 sm:w-2/5 xl:w-1/5 bg-white rounded-lg p-4">
        <h6 className="text-2xl font-medium">Create team</h6>
        <div className="w-full bg-gray-300 h-0.5 my-1 rounded-full" />
        <form method="POST" action={'/api/invite'}>
          <div className="flex flex-col gap-4 mt-2 w-full">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                Team owner email
              </label>
              <input
                id="email"
                name="email"
                placeholder="Owner Email"
                className="border border-gray-400 rounded-md py-1 px-2 text-sm"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium">
                Team name
              </label>
              <input
                placeholder="Team Name"
                id="name"
                name="name"
                type="text"
                className="border border-gray-400 rounded-md py-1 px-2 text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 w-fit px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
