import React from "react"
import {
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendarCheck,
  FaCircle
} from "react-icons/fa"
import { Addproject } from "../Addproject"

export const Sidebar = () => {
  return (
    <div>
      <p>
        <FaInbox />
        Inbox
      </p>
      <p>
        <FaRegCalendarCheck />
        Today
      </p>
      <p>
        <FaRegCalendarAlt />
        Next 7 days
      </p>
      <p>+ Add Project</p>
      <Addproject />
    </div>
  )
}
