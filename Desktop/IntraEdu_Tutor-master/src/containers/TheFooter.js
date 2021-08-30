import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">Check &copy; 2020 Check.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="http://shellcode.co.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ShellCode Solutions.
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
