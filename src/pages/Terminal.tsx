import React, { useRef } from 'react'
import { XTerm } from 'xterm-for-react'
import Xterm from 'xterm-for-react/dist/src/XTerm'

type Props = {}

function Terminal({ }: Props) {
    const xtermRef = useRef<Xterm>(null)
    React.useEffect(() => {
        if (xtermRef.current) {
            const xterm = xtermRef.current.terminal;
            xterm.writeln("hello world");
        }
    }, [xtermRef])
    return (
        <div>Terminal
            <XTerm ref={xtermRef} />
        </div>
    )
}

export default Terminal