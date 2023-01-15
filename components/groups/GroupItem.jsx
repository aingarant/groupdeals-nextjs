const GroupItem = (group) => {
  return (
    <div className="p-4 bg-red-50 m-2 hover:bg-slate-100 text-center rounded-lg">
      <h1 className="text-xl font-bold">{group.name}</h1>
    </div>
  )
}

export default GroupItem