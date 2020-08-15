const handleColourTags = () => {
    const allPriorityTags = document.querySelectorAll('.priority_tag_single').length !== 0  ? [...document.querySelectorAll('.priority_tag_single')] : [...document.querySelectorAll('.priority_tag')] 
    allPriorityTags.map(tag => $(tag).css('background' ,`${getTag(tag.innerHTML)}`))
}

const getTag = tag => {
    const tags = {
        '1': '#DD5D63',
        '2': '#6676F6',
        '3': '#A364D9',
        '4': '#EEA35B',
        '5': '#94D798'
    }
    return tags[tag]
}

handleColourTags()
// switch(window.location.pathname){
//     case "/task":
//         handleColourTags()
// }