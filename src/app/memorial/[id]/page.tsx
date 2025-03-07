const MemoryPage = async ({ params }: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;

  return <div>Memory {id}</div>
}

export default MemoryPage;