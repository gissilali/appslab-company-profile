import React from "react"

let scrollDistance = 0
let ticking = false
let links = null

class MainNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentLink: "hello" }
  }

  scrollTo = event => {
    console.log(event.target)
    let target = event.target.getAttribute("href")
    let section = document.querySelector(target)
    if (section == null) return
    
    event.preventDefault()
    section.scrollIntoView({
      behavior: "smooth",
    })
    // window.location.hash = target
  }
  componentDidMount() {
    window.document.addEventListener("scroll", this.handleScroll, true)
    links = document.querySelectorAll(".nav-link")
  }

  render() {
    return (
      <ul className="fixed">
        <li className="text-sm pl-4">
          <a
            onClick={this.scrollTo}
            href="#overview"
            className={`nav-link  ${
              this.state.currentLink == "overview" ? "active" : ""
            }`}
          >
            <span className="mx-2">—</span>
            Appslab
          </a>
        </li>
        <li className="text-sm pl-4">
          <a onClick={this.scrollTo} href="#our-values" className={`nav-link  ${this.state.currentLink == 'our-values' ? 'active':''}`}>
          <span className="mx-2">—</span>
            Values
          </a>
        </li>
        <li className="text-sm">
          <a onClick={this.scrollTo} href="#services" className={`nav-link  ${this.state.currentLink == 'services' ? 'active':''}`}>
          <span className="mx-2">—</span>
            Services
          </a>
        </li>
        <li className="text-sm">
          <a onClick={this.scrollTo} href="#process" className={`nav-link  ${this.state.currentLink == 'process' ? 'active':''}`}>
          <span className="mx-2">—</span>
            The Process
          </a>
        </li>
        <li className="text-sm">
          <a onClick={this.scrollTo} href="#work" className={`nav-link  ${this.state.currentLink == 'work' ? 'active':''}`}>
          <span className="mx-2">—</span>
            Work
          </a>
        </li>
        <li className="text-sm">
          <a onClick={this.scrollTo} href="#contact-us" className={`nav-link  ${this.state.currentLink == 'contact-us' ? 'active':''}`}>
          <span className="mx-2">—</span>
            Holla at us
          </a>
        </li>
      </ul>
    )
  }
  handleScroll = () => {
    scrollDistance = window.scrollY
    document.querySelectorAll(".scrollable-section").forEach(section => {
      console.log("scrollTop ",section.offsetTop)
      console.log("scrollDistance", scrollDistance)
      if (section.offsetTop - 150 <= scrollDistance) {
        let targetId = section.getAttribute("id")
        this.setState({ currentLink: targetId })
      }
    })
  }
}

export default MainNavigation
