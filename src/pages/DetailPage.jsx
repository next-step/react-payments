import PageLayout from '$components/common/PageLayout'
import CardAliasInput from '$components/detail/CardAliasInput'
import CardPreview from '$components/detail/CardPreview'
import DetailPageButtons from '$components/detail/DetailPageButtons'

function DetailPage() {
  return (
    <PageLayout className="flex-column-center">
      <CardPreview />
      <CardAliasInput />
      <DetailPageButtons />
    </PageLayout>
  )
}

export default DetailPage
