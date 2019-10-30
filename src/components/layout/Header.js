import React from "react"
import { FaPizzaSlice, FaPlus, FaSearch } from "react-icons/fa"
import { MdSettings, MdNotifications } from "react-icons/md"

export const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <p>logo</p>
        </div>

        <div>
          <FaSearch />
          <input type="text" placeholder="Quick Find" />
        </div>

        <ul>
          <li>
            <FaPlus />
          </li>
          <li>
            <MdNotifications />
          </li>
          <li>
            <MdSettings />
          </li>
        </ul>
      </nav>
    </header>
  )
}
