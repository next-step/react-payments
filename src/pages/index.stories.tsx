import AddPage from '@/pages/add'
import AliasPage from '@/pages/alias'
import ListPage from '@/pages/list'
import { ComponentStory } from '@storybook/react'

export default {
  title: '2. Pages',
}

const AddPageTemplate: ComponentStory<typeof AddPage> = args => (
  <>
    <AddPage {...args} />
    <div id="modalRoot"></div>
  </>
)
export const PageAdd = AddPageTemplate.bind({})

const cardData = {
  cardName: '그린카드',
  cardNumber: '1234 - 1234 - **** - ****',
  expired: '10 / 24',
  userName: 'JAENAM',
  alias: '법카',
}

const AliasPageTemplate: ComponentStory<typeof AliasPage> = args => <AliasPage {...args} />
export const PageAlias = AliasPageTemplate.bind({})
PageAlias.args = {
  payload: {
    cardData,
  },
}

const ListPageTemplate: ComponentStory<typeof ListPage> = args => <ListPage {...args} />
export const PageList = ListPageTemplate.bind({})
PageList.args = {
  cards: [cardData, cardData],
  setRoute: () => {},
}
