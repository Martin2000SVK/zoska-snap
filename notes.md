Martin Tacsik 4.C 2.skupina

What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*



ls --- zobrazí položky na umiestnení
cd nazov priečinka --- prejsť do priečinka

Na stranku sa dostaneme:  stranka/názov priečinka 
Tvorba stránky: src/app/nazovpriečinka kliknúť pravým New Folder
Každá stránka musí obsahovať page.tsx
Príklad stránky:
import Typography from "@mui/material/Typography";

export default function GDPR() {
return (
<Typography> Stranka na GDPR </Typography>
);
}


Prepojenie github-u:
pridanie mena githubu: git config --global user.name "Martin2000SVK"
pridanie mailu na pridanie: git config --global user.email "tacsikmartin@gmail.com"
poslanie linku: git remote add origin https://github.com/Martin2000SVK/zoska-snap.git
kontrola: git remote -v
output: 	origin  https://github.com/Martin2000SVK/zoska-snap.git (fetch)
		origin  https://github.com/Martin2000SVK/zoska-snap.git (push)
potvrdenie: git add .
