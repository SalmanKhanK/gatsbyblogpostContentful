import React,{ReactNode} from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
type LayoutProps = {
    children: ReactNode
}

export default ({ children }: LayoutProps) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Blog Post
                </Typography>
                </Toolbar>
            </AppBar>
            <div>
                {children}
            </div>
        </div>
    )
}
