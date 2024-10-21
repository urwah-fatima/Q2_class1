import Link from "next/link"
import Button from "../componant/page"

function Category(){
    return
        <ul>
            {/* <li className="text-blue-500"><b><a href="/category/pakistan">Pakistan</a></b></li> */}
            <li className="text-green-500">
                <b><Link href="/category/pakistan">Pakistan</Link></b></li>
            <li className="text-blue-500">
                <b><Link href="/category/world">World</Link></b></li>
            <li><b><Link href="/sports">Sports</Link></b></li>
            <li><button>Click Me!</button></li>
        </ul>
    
}

export default Category