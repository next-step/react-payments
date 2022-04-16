import AddPageHeader from '$components/add/AddPageHeader'
import AddPageNextButton from '$components/add/AddPageNextButton'
import CardForm from '$components/add/CardForm'
import CardPreview from '$components/add/CardPreview'
import PageLayout from '$components/common/PageLayout'
import CardFormContextProvider from '$contexts/CardFormContext'

function AddPage() {
  return (
    <CardFormContextProvider>
      <PageLayout>
        <AddPageHeader />
        <CardPreview />
        <CardForm />
        <AddPageNextButton />
      </PageLayout>
    </CardFormContextProvider>
  )
}

export default AddPage
