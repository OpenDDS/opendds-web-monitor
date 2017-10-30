var sidebar = document.getElementById("sidebar")

var items = [
    { link: "http://google.com", text: "Google", icon: "fa fa-th-list" },
    { link: "http://google.com", text: "Google", icon: "fa fa-table" },
    { link: "http://google.com", text: "Google", icon: "fa fa-th-large" },
    { link: "http://google.com", text: "Google", icon: "fa fa-th" }   
]

console.log(sidebar)

var opened = () => {
    var ul = document.createElement('ul')
    ul.className = "nav nav-pills flex-column";

    items.forEach((item) => {
        var li = document.createElement('li')
        li.className = "nav-item"
    
        var a = document.createElement('a')
        a.className = "nav-link"
        a.href = item.link
    
        var span = document.createElement('span')
        span.className = item.icon
        a.appendChild(span)
        a.appendChild(document.createTextNode(" " + item.text))
        
        li.appendChild(a)
        ul.appendChild(li)
        sidebar.appendChild(ul)
    })
}

var closed = () => {
    var ul = document.createElement('ul')
    ul.className = "nav nav-pills flex-column";

    items.forEach((item) => {
        var li = document.createElement('li')
        li.className = "nav-item"
    
        var a = document.createElement('a')
        a.className = "nav-link"
        a.href = item.link
    
        var span = document.createElement('span')
        span.className = item.icon
        a.appendChild(span)
        
        li.appendChild(a)
        ul.appendChild(li)
        sidebar.appendChild(ul)
    })
}

var open = () => {
    sidebar.className = "col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar"
    opened()
}

var close = () => {
    sidebar.className = "col-sm-1 col-md-1 d-none d-sm-block bg-light sidebar"
    closed()
}

close()


