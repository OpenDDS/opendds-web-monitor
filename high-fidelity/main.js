var sidebar = document.getElementById("sidebar")
var main = document.getElementById("main")

var items = [
    { link: "index.html", text: "Dashboard", icon: "fa fa-th-large" },
    { link: "data.html", text: "Process List", icon: "fa fa-th-list" },
]

console.log(sidebar)

var displayOpened = () => {
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

    var closeButton = document.createElement('button')
    var closeIcon = document.createElement('span')
    closeIcon.className = "fa fa-chevron-left"
    closeButton.appendChild(closeIcon)
    closeButton.className = "btn btn-primary"
    closeButton.id = "collapseButton"
    closeButton.onclick = () => {
        close()
    }
    sidebar.appendChild(closeButton);
}

var displayClosed = () => {
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
    var openButton = document.createElement('button')
    var openIcon = document.createElement('span')
    openIcon.className = "fa fa-chevron-right"
    openButton.appendChild(openIcon)
    openButton.className = "btn btn-primary"
    openButton.id = "collapseButton"
    openButton.onclick = () => {
        open()
    }
    sidebar.appendChild(openButton);
}

var open = () => {
    sidebar.className = "col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar"
    main.className = "col-sm-9 col-md-10 offset-sm-3 offset-md-2"
    sidebar.innerHTML = null
    displayOpened()
}

var close = () => {
    sidebar.className = "col-sm-1 d-none d-sm-block bg-light sidebar collapsed"
    main.className = "col-11 offset-1 collapsed"
    sidebar.innerHTML = null
    displayClosed()
}

// close()
open()


