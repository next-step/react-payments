import CardListContextProvider from '@/contexts/cardList'
import AddPage from '@/pages/add'
import AliasPage from '@/pages/alias'
import ListPage from '@/pages/list'
import { ComponentStory } from '@storybook/react'

export default {
  title: '2. Pages',
}

const AddPageTemplate: ComponentStory<typeof AddPage> = args => (
  <>
    <AddPage />
    <div id="modalRoot"></div>
  </>
)
export const PageAdd = AddPageTemplate.bind({})

const cardData = (cardName = '그린카드') => ({
  cardName,
  cardNumber: '1234 - 1234 - **** - ****',
  expired: '10 / 24',
  userName: 'JAENAM',
  alias: '법카',
})

const AliasPageTemplate: ComponentStory<typeof AliasPage> = args => (
  <CardListContextProvider {...args}>
    <AliasPage />
  </CardListContextProvider>
)
export const PageAlias = AliasPageTemplate.bind({})
PageAlias.args = {
  initialState: {
    editingCard: cardData(),
  },
}

const ListPageTemplate: ComponentStory<typeof ListPage> = args => (
  <CardListContextProvider {...args}>
    <ListPage />
  </CardListContextProvider>
)
export const PageList = ListPageTemplate.bind({})
PageList.args = {
  initialState: {
    cards: [cardData(), cardData('너네카드')],
  },
}
