import GroupCard from "@/components/custom_ui/groupCard/page"

function Dashboard() {
  return (
    <div className='grid auto-rows-min gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
    </div>
  )
}

export default Dashboard
