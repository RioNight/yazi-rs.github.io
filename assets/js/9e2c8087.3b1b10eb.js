"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[857],{2741:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=i(1527),l=i(6225);const r={sidebar_position:2,description:"Learn how to configure keyboard shortcuts with Yazi."},c="Keymap",d={id:"configuration/keymap",title:"Keymap",description:"Learn how to configure keyboard shortcuts with Yazi.",source:"@site/docs/configuration/keymap.md",sourceDirName:"configuration",slug:"/configuration/keymap",permalink:"/docs/configuration/keymap",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/configuration/keymap.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn how to configure keyboard shortcuts with Yazi."},sidebar:"docsSidebar",previous:{title:"Yazi",permalink:"/docs/configuration/yazi"},next:{title:"Theme",permalink:"/docs/configuration/theme"}},t={},h=[{value:"manager",id:"manager",level:2},{value:"Navigation",id:"navigation",level:3},{value:"Selection",id:"selection",level:3},{value:"Operation",id:"operation",level:3},{value:"Tabs",id:"tabs",level:3},{value:"Tasks",id:"tasks",level:3},{value:"Help",id:"help",level:3},{value:"tasks",id:"tasks-1",level:2},{value:"select",id:"select",level:2},{value:"input",id:"input",level:2},{value:"Normal mode",id:"normal-mode",level:3},{value:"Insert mode",id:"insert-mode",level:3},{value:"Help",id:"help-1",level:2},{value:"Completion",id:"completion",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"keymap",children:"Keymap"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you haven't created and used your own configuration file yet, please see ",(0,s.jsx)(n.a,{href:"/docs/configuration/overview",children:"Configuration"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"manager",children:"manager"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"escape: Cancel find, exit visual mode, clear selected, cancel filter, or cancel search."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--all"}),": Do all of the above."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--find"}),": Cancel find."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--visual"}),": Exit visual mode."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--select"}),": Clear selected."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--filter"}),": Cancel filter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--search"}),": Cancel search."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Automatically determine the operation by default, and it will only execute the selected operation after specifying the option; multiple options can be stacked."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"quit: Exit the process."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--no-cwd-file"}),": Don't write the current directory to the ",(0,s.jsx)(n.code,{children:"cwd-file"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"close: Close the current tab; if it's the last tab, exit the process instead."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"navigation",children:"Navigation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"arrow"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"})," / ",(0,s.jsx)(n.code,{children:"n%"}),": Move the cursor up or down by ",(0,s.jsx)(n.code,{children:"n"})," or ",(0,s.jsx)(n.code,{children:"n%"})," lines. Use negative values to move up and positive values to move down."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"leave: Go back to the parent directory."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"enter: Enter the child directory."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"back: Go back to the previous directory."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"forward: Go forward to the next directory."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"peek"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"}),": Peek up or down at file contents in the preview. Use negative values to peek up and positive values to peek down."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"cd: Change the current directory."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),": the path to change to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--interactive"}),": Use an interactive UI to input the path."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"reveal: Change the current directory to the parent of specified file, and hover on it."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),": the path to reveal."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"selection",children:"Selection"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"select"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--state=true"}),": Select the current file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--state=false"}),": Deselect the current file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--state=none"}),": Default, toggle the selection state of the current file."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"select_all"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--state=true"}),": Select all files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--state=false"}),": Deselect all files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--state=none"}),": Default, toggle the selection state of all files."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"visual_mode: Enter visual mode (selection mode)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--unset"}),": Enter visual mode (unset mode)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"operation",children:"Operation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"open: Open the selected files."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--interactive"}),": Open the selected files with an interactive UI to choose the opening method."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"yank: Yank the selected files."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--cut"}),": Cut the selected files."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"paste: Paste the yanked files."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--force"}),": Overwrite the destination file if it exists."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--follow"}),": Copy the file pointed to by a symbolic link, rather than the link itself. Only can be used during copying."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"link: Create a symbolic link to the yanked files. (This is a privileged action in Windows and must be run as an administrator.)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--relative"}),": Use a relative path for the symbolic link."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--force"}),": Overwrite the destination file if it exists."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"remove: Move the files to the trash/recycle bin."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--force"}),": Don't show the confirmation dialog, and trash/delete files directly."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--permanently"}),": Permanently delete the files."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["create: Create a file or directory. Ends with ",(0,s.jsx)(n.code,{children:"/"})," (Unix) or ",(0,s.jsx)(n.code,{children:"\\"})," (Windows) for directories."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--force"}),": Overwrite the destination file directly if it exists, without showing the confirmation dialog."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"rename: Rename a file or directory."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--force"}),": Overwrite the destination file directly if it exists, without showing the confirmation dialog."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"copy: Copy the path of files or directories that are selected or hovered on."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),": Copy the absolute path."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dirname"}),": Copy the path of the parent directory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filename"}),": Copy the name of the file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name_without_ext"}),": Copy the name of the file without the extension."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"shell: Run a shell command."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exec"}),": Optional, command template to be run."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--block"}),": Open in a blocking manner. After setting this, Yazi will hide into a secondary screen and display the program on the main screen until it exits. During this time, it can receive I/O signals, which is useful for interactive programs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--confirm"}),": When the template is provided, run it directly, no input UI was shown."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"hidden: Set the visibility of hidden files."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"show"}),": Show hidden files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hide"}),": Hide hidden files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toggle"}),": Default, toggle the hidden state."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"linemode: Set the line mode."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"none"}),": No line mode."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"size"}),": Display the size of the file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"permissions"}),": Display the permissions of the file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mtime"}),": Display the last modified time of the file."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In addition, you can also specify any 1 to 20 characters, and extend it within a UI plugin.\nWhich means you can implement your own linemode through the plugin by simply overriding the ",(0,s.jsxs)(n.a,{href:"https://github.com/sxyazi/yazi/blob/main/yazi-plugin/preset/components/folder.lua",children:[(0,s.jsx)(n.code,{children:"Folder:linemode"})," method"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"search"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rg"}),": Search files by content using ripgrep."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fd"}),": Search files by name using fd."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"none"}),": Default, cancel the ongoing search."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"jump"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fzf"}),": Jump to a directory, or reveal a file using fzf."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"zoxide"}),": Jump to a directory using zoxide."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"find"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"query"}),": Optional, the query to find for. If not provided, an interactive UI will be used to input with."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--previous"}),": Find for the previous occurrence."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--smart"}),": Use smart-case when finding, i.e. case-sensitive if the query contains uppercase characters, otherwise case-insensitive."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--insensitive"}),": Use case-insensitive find."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"find_arrow: Move the cursor to the next or previous occurrence."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--previous"}),": Move to the previous occurrence."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"filter"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"query"}),": Optional, the query to filter for. If not provided, an interactive UI will be used to input with."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--smart"}),": Use smart-case when filtering, i.e. case-sensitive if the query contains uppercase characters, otherwise case-insensitive."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--insensitive"}),": Use case-insensitive filter."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"sort"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"by"}),": Optional, if not provided, the sort method will be kept unchanged.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"none"'}),": Don't sort."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"alphabetical"'}),": Sort alphabetically, e.g. ",(0,s.jsx)(n.code,{children:"1.md"})," < ",(0,s.jsx)(n.code,{children:"10.md"})," < ",(0,s.jsx)(n.code,{children:"2.md"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"created"'}),": Sort by creation time."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"modified"'}),": Sort by last modified time."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"natural"'}),": Sort naturally, e.g. ",(0,s.jsx)(n.code,{children:"1.md"})," < ",(0,s.jsx)(n.code,{children:"2.md"})," < ",(0,s.jsx)(n.code,{children:"10.md"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"size"'}),": Sort by file size."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--reverse"}),": Display files in reverse order."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--dir_first"}),": Display directories first."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tabs",children:"Tabs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"tab_create"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),": Create a new tab using the specified path."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--current"}),": Create a new tab using the current path."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"tab_close"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"}),": Close the tab at position n, starting from 0."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"tab_switch"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"}),": Switch to the tab at position n, starting from 0."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--relative"}),": Switch to the tab at a position relative to the current tab. The value of n can be negative when using this parameter."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"tab_swap"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"}),": Swap the current tab with the tab at position n, where negative values move the tab forward, and positive values move it backward."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tasks",children:"Tasks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"tasks_show: Show the task manager."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"help",children:"Help"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"help: Open the help menu."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tasks-1",children:"tasks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"close: Hide the task manager."}),"\n",(0,s.jsxs)(n.li,{children:["arrow:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-1"}),": Move the cursor up 1 line."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1"}),": Move the cursor down 1 line."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["inspect: Inspect the task (press ",(0,s.jsx)(n.code,{children:"q"})," to exit the inspect view)."]}),"\n",(0,s.jsx)(n.li,{children:"cancel: Cancel the task."}),"\n",(0,s.jsx)(n.li,{children:"help: Open the help menu."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"select",children:"select"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"close: Cancel selection."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--submit"}),": Submit the selection."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"arrow"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"}),": Move the cursor up or down n lines. Negative value for up, positive value for down."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"help: Open the help menu."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"input",children:"input"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"close: Cancel input."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--submit"}),": Submit the input."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"escape: Go back the normal mode, or cancel input."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"move: Move the cursor left or right."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"}),": Move the cursor n characters left or right. Negative value for left, positive value for right."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--in-operating"}),": Move the cursor only if its currently waiting for an operation."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"backward: Move back to the start of the current or previous word."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"forward: Move forward to the start of the next word."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--end-of-word"}),": Move forward to the end of the current or next word."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"normal-mode",children:"Normal mode"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"insert: Enter insert mode."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--append"}),": Insert after the cursor."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"visual: Enter visual mode."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"delete: Delete the selected characters."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--cut"}),": Cut the selected characters into clipboard, instead of only deleting them."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--insert"}),": Delete and enter insert mode."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"yank: Copy the selected characters."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"paste: Paste the copied characters after the cursor."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--before"}),": Paste the copied characters before the cursor."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"undo: Undo the last operation."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"redo: Redo the last operation."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"help: Open the help menu."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"insert-mode",children:"Insert mode"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"backspace: Delete the character before the cursor."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--under"}),": Delete the character under the cursor."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"kill: Kill the specified range of characters."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bol"}),": Kill backwards to the BOL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eol"}),": Kill forwards to the EOL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"backward"}),": Kill backwards to the start of the current word."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"forward"}),": Kill forwards to the end of the current word."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"help-1",children:"Help"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"close: Hide the help menu."}),"\n",(0,s.jsx)(n.li,{children:"escape: Clear the filter, or hide the help menu."}),"\n",(0,s.jsxs)(n.li,{children:["arrow","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"}),": Move the cursor up or down n lines. Negative value for up, positive value for down."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"filter: Apply a filter for the help items."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"completion",children:"Completion"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"close: Hide the completion menu."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--submit"}),": Submit the completion."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"arrow"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"}),": Move the cursor up or down n lines. Negative value for up, positive value for down."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"help: Open the help menu."}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},6225:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>c});var s=i(959);const l={},r=s.createContext(l);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);