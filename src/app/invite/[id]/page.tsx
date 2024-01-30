import Divider from '../../../components/Divider';

// TODO: prettify invitation sent page
export default function Invite({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="bg-white p-10 flex items-center justify-center rounded-xl">
      <div>
        <h2 className="text-2xl font-medium">Invitation Sent!</h2>
        <Divider className="mt-2 mb-4" />
        <div className="flex flex-col gap-1">
          <p>Invitation Email was sent successfully!</p>
          <p>Invitation ID :</p>
          <p className="font-medium mt-2">{id}</p>
        </div>
      </div>
    </div>
  );
}
