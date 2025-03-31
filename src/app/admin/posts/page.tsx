import { getSession } from '@/app/actions/auth';
import Posts from '@/components/pages/admin/Posts';
import { getAdminMemories } from '@/services/memory';
import { redirect } from 'next/navigation';

const AdminPage = async () => {
  const session = await getSession();

  if (!session.isAdmin) {
    redirect('/');
  }

    const { posts } = await getAdminMemories();

  return (
    <Posts posts={posts} />
  );
};

export default AdminPage;
