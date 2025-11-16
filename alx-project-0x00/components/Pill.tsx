interface propPill{
title:string
}

const Pill: React.FC<propPill> = ({title}:propPill) => {
  return (
    <div className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
      <p className=" text-sm ">Title</p>
    </div>
  )
}

export default Pill;