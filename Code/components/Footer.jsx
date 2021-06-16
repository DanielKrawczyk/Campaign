import * as version from '../data/version.json';


function Footer() {
    return (
        <div id="app_version">
            {version.default.version}
        </div>
    )
}

export default Footer;