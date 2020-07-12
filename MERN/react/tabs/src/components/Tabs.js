import React, {useState} from 'react';
import looks from './Tabs.module.css'

const items = [
    {
        label: 'Tab 1',
        content: 'Hey from tab 1'
    },
    {
        label: 'Tab 2',
        content: 'Hey from tab 2'
    },
    {
        label: 'Tab 3',
        content: 'Hey from tab 3'
    }
]
const Tabs = () => {
    const [content, setContent] = useState('')

    const handleClick = index => {
        console.log(index)
        setContent(items[index].content)
        console.log(content)
    }

    return (
        <>
        <div className = {looks.container}>
            {items.map((tab, index)=>{
                return (
                    <div className = {looks.tabs} onClick = {() => handleClick(index)} key={index}>{tab.label}</div>     
                )
            })}
        </div>
        <div className = {looks.content}>{content}</div>
        </>
    )

}

export default Tabs