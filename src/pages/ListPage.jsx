import PageLayout from '$components/common/PageLayout'
import CardAddButton from '$components/list/CardAddButton'
import CardList from '$components/list/CardList'
import ListPageTitle from '$components/list/ListPageTitle'

function ListPage() {
  return (
    <PageLayout>
      <ListPageTitle />
      <CardList />
      <CardAddButton />
    </PageLayout>
  )
}

export default ListPage
