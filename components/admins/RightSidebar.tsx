import SendBroadcast from "@/components/admins/forms/SendBroadcast";
async function RightSidebar() {
  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>
          Send A Broadcast Message
        </h3>
        <div className='mt-4 flex w-[350px] flex-col gap-9'>
            <SendBroadcast/>
        </div>
      </div>

      
    </section>
  );
}

export default RightSidebar;