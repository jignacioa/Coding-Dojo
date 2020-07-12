import React from 'react';



// you want for this code to be reuseable in diff. places of the application 
// render just return jsx 
/*<> fragment tags wraps the two divs for react to function but it has no 
function and nothing will wrap(show up in the html)
    - whatever is returned has to be wrapped in one element*/
class FancyDiv extends React.Component {
    render () {
        return (
        <>
        <div>something</div>
        <div style = {{
            border: '4px dashed red',
            background: 'lightblue'
        }}>
            {this.props.children}
        </div>
        </>
        )
    }
}

/*this.props.children:
-(this) will refer to the particular class instance (this particular instance of the FancyDiv class
- props has children
   - children is whatever we want inside the div */


//class needs to be exported to be used in other parts of the app, then import into file that will use it 
export default FancyDiv;