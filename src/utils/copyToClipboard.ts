"use client"
import notify from "@/utils/notify"

interface CopyToClipboardProps {
  tu: Record<string, string>;
}

const copyToClipboard = (tu: CopyToClipboardProps) => {
  navigator.clipboard.writeText("jurgenkings20@gmail.com")
  notify("success", "success", { success: `${tu.notify_success_copied}` })
}

export default copyToClipboard