import SendBroadcast from "@/components/admins/forms/SendBroadcast";
async function RightSidebar() {
  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1 uppercase'>
          Send A Broadcast Message
        </h3>
        <div className='mt-7 flex max-w-md'>
            <SendBroadcast textStyle="uppercase text-light-1"/>
        </div>
      </div>

      
    </section>
  );
}

export default RightSidebar;