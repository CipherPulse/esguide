"use strict";(self.webpackChunkmy_docs_donuts=self.webpackChunkmy_docs_donuts||[]).push([[569],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5500:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},o="Setting up Acme.sh",l={unversionedId:"web-security/setting-up-acme-sh",id:"web-security/setting-up-acme-sh",title:"Setting up Acme.sh",description:"This guide will help you set up Acme.sh with Cloudflare DNS verification for your domain.",source:"@site/docs/web-security/setting-up-acme-sh.md",sourceDirName:"web-security",slug:"/web-security/setting-up-acme-sh",permalink:"/esguide/web-security/setting-up-acme-sh",draft:!1,editUrl:"https://github.com/KryptosDonuts/esguide/tree/main/docs/web-security/setting-up-acme-sh.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Web Security",permalink:"/esguide/category/web-security"},next:{title:"Network Administration",permalink:"/esguide/category/network-administration"}},p={},c=[{value:"Step 1: Acme.sh Installation",id:"step-1-acmesh-installation",level:2},{value:"Step 2: Preparing Cloudflare API Credentials",id:"step-2-preparing-cloudflare-api-credentials",level:2},{value:"Step 3: Obtain the Certificate",id:"step-3-obtain-the-certificate",level:2},{value:"Step 4: Implement the Certificate",id:"step-4-implement-the-certificate",level:2},{value:"Step 5: Confirm Certificate Implementation",id:"step-5-confirm-certificate-implementation",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-acmesh"},"Setting up Acme.sh"),(0,r.kt)("p",null,"This guide will help you set up Acme.sh with Cloudflare DNS verification for your domain."),(0,r.kt)("h2",{id:"step-1-acmesh-installation"},"Step 1: Acme.sh Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect to your server via SSH.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the command below to install Acme.sh:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://get.acme.sh | sh\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart your terminal or run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bashrc\n")))),(0,r.kt)("p",null,"This will ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"acme.sh")," command is available in your shell."),(0,r.kt)("h2",{id:"step-2-preparing-cloudflare-api-credentials"},"Step 2: Preparing Cloudflare API Credentials"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to your Cloudflare account and navigate to the API Tokens page: ",(0,r.kt)("a",{parentName:"p",href:"https://dash.cloudflare.com/profile/api-tokens"},"https://dash.cloudflare.com/profile/api-tokens"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click "Create Token" and use the "Edit zone DNS" template.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the specific zone (domain) for which you want to issue the certificate.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Set the Permissions to "Zone:DNS:Edit" and click "Continue to summary."')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Review the settings and click "Create Token."')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the generated API token.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SSH into your server and run the following commands to export the required environment variables:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export CF_Token="your_cloudflare_api_token"\nexport CF_Email="your_cloudflare_account_email"\n')))),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"your_cloudflare_api_token")," with the API token you copied, and ",(0,r.kt)("inlineCode",{parentName:"p"},"your_cloudflare_account_email")," with the email address associated with your Cloudflare account."),(0,r.kt)("h2",{id:"step-3-obtain-the-certificate"},"Step 3: Obtain the Certificate"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the command below to get a certificate using Cloudflare DNS verification:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"acme.sh --issue --dns dns_cf -d example.com -d *.example.com\n")))),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com")," with your domain."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Acme.sh will complete the Cloudflare DNS verification and provide the certificate.")),(0,r.kt)("h2",{id:"step-4-implement-the-certificate"},"Step 4: Implement the Certificate"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To apply the obtained certificate for a specific service, execute:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'acme.sh --install-cert -d example.com\n --cert-file /path/to/cert.pem \n --key-file /path/to/key.pem \n --fullchain-file /path/to/fullchain.pem \n --reloadcmd "service <SERVICE_IDENTIFIER> reload"\n')))),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/cert.pem"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/key.pem"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/fullchain.pem")," with your preferred certificate file paths, and ",(0,r.kt)("inlineCode",{parentName:"p"},"<SERVICE_IDENTIFIER>")," with the service that needs the certificate (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"apache"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"haproxy"),")."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"This command also configures automatic certificate renewal.")),(0,r.kt)("h2",{id:"step-5-confirm-certificate-implementation"},"Step 5: Confirm Certificate Implementation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Confirm the successful certificate implementation by visiting your domain using HTTPS. You should see a secure connection with a valid certificate.")),(0,r.kt)("p",null,"Great job! You have now set up Acme.sh with Cloudflare DNS verification for your domain."))}u.isMDXComponent=!0}}]);