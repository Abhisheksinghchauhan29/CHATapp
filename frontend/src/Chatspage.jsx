import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const Chatspage = (props) => {
    const chatProps = useMultiChatLogic(
        'f13aab44-d438-4697-9e43-242a6b0b671c',
        props.user.username,
        props.user.secret
        
      );
      return (
        <div style={{height:'100vh'}}>
          <MultiChatWindow {...chatProps} />
          <MultiChatSocket {...chatProps} style={{height:'100%'}} />
        </div>
      )
}
export default Chatspage