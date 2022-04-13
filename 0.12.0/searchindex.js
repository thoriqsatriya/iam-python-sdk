Search.setIndex({docnames:["authors","changelog","contributing","frameworks","iam_python_sdk","index","installation","modules","usage"],envversion:51,filenames:["authors.rst","changelog.rst","contributing.rst","frameworks.rst","iam_python_sdk.rst","index.rst","installation.rst","modules.rst","usage.rst"],objects:{"":{iam_python_sdk:[4,0,0,"-"]},"iam_python_sdk.bloom":{BloomFilter:[4,1,1,""]},"iam_python_sdk.bloom.BloomFilter":{contain:[4,2,1,""],insert:[4,2,1,""]},"iam_python_sdk.cache":{Cache:[4,1,1,""]},"iam_python_sdk.cache.Cache":{get:[4,2,1,""],is_expired:[4,2,1,""],set:[4,2,1,""]},"iam_python_sdk.client":{DefaultClient:[4,1,1,""],HttpClient:[4,1,1,""],NewDefaultClient:[4,1,1,""],backoff_giveup_handler:[4,3,1,""]},"iam_python_sdk.client.DefaultClient":{ClientToken:[4,2,1,""],ClientTokenGrant:[4,2,1,""],GetClientInformation:[4,2,1,""],GetRolePermissions:[4,2,1,""],HasBan:[4,2,1,""],HealthCheck:[4,2,1,""],StartLocalValidation:[4,2,1,""],UserAnonymousStatus:[4,2,1,""],UserEmailVerificationStatus:[4,2,1,""],UserPhoneVerificationStatus:[4,2,1,""],ValidateAccessToken:[4,2,1,""],ValidateAndParseClaims:[4,2,1,""],ValidateAudience:[4,2,1,""],ValidatePermission:[4,2,1,""],ValidateRole:[4,2,1,""],ValidateScope:[4,2,1,""]},"iam_python_sdk.client.HttpClient":{get:[4,2,1,""],post:[4,2,1,""],request:[4,2,1,""]},"iam_python_sdk.config":{Config:[4,1,1,""]},"iam_python_sdk.errors":{ClientTokenGrantError:[4,4,1,""],EmptyTokenError:[4,4,1,""],Error:[4,4,1,""],ForbiddenError:[4,4,1,""],GetClientInformationError:[4,4,1,""],GetJWKSError:[4,4,1,""],GetRevocationListError:[4,4,1,""],GetRolePermissionError:[4,4,1,""],HTTPClientError:[4,4,1,""],InvalidAudError:[4,4,1,""],InvalidScopeError:[4,4,1,""],InvalidTokenSignatureKeyError:[4,4,1,""],NilClaimError:[4,4,1,""],NoLocalValidationError:[4,4,1,""],RefreshAccessTokenError:[4,4,1,""],RoleNotFoundError:[4,4,1,""],StartLocalValidationError:[4,4,1,""],TokenRevokedError:[4,4,1,""],UnauthorizedError:[4,4,1,""],UserRevokedError:[4,4,1,""],ValidateAccessTokenError:[4,4,1,""],ValidateAndParseClaimsError:[4,4,1,""],ValidateAudienceError:[4,4,1,""],ValidateJWTError:[4,4,1,""],ValidatePermissionError:[4,4,1,""],ValidateScopeError:[4,4,1,""]},"iam_python_sdk.errors.EmptyTokenError":{message:[4,5,1,""]},"iam_python_sdk.errors.ForbiddenError":{message:[4,5,1,""]},"iam_python_sdk.errors.InvalidAudError":{message:[4,5,1,""]},"iam_python_sdk.errors.InvalidScopeError":{message:[4,5,1,""]},"iam_python_sdk.errors.InvalidTokenSignatureKeyError":{message:[4,5,1,""]},"iam_python_sdk.errors.NilClaimError":{message:[4,5,1,""]},"iam_python_sdk.errors.NoLocalValidationError":{message:[4,5,1,""]},"iam_python_sdk.errors.RoleNotFoundError":{message:[4,5,1,""]},"iam_python_sdk.errors.TokenRevokedError":{message:[4,5,1,""]},"iam_python_sdk.errors.UnauthorizedError":{message:[4,5,1,""]},"iam_python_sdk.errors.UserRevokedError":{message:[4,5,1,""]},"iam_python_sdk.flask":{IAM:[4,1,1,""],cors_options:[4,3,1,""],token_required:[4,3,1,""]},"iam_python_sdk.flask.IAM":{init_app:[4,2,1,""],validate_permission:[4,2,1,""],validate_token_in_request:[4,2,1,""]},"iam_python_sdk.models":{ClientInformation:[4,1,1,""],JWTBan:[4,1,1,""],JWTClaims:[4,1,1,""],Model:[4,1,1,""],NamespaceRole:[4,1,1,""],Permission:[4,1,1,""],RevocationList:[4,1,1,""],Role:[4,1,1,""],TokenResponse:[4,1,1,""],UserRevocationListRecord:[4,1,1,""]},"iam_python_sdk.models.ClientInformation":{Baseuri:[4,5,1,""],Clientname:[4,5,1,""],Namespace:[4,5,1,""],Redirecturi:[4,5,1,""]},"iam_python_sdk.models.JWTBan":{Ban:[4,5,1,""],Enddate:[4,5,1,""]},"iam_python_sdk.models.JWTClaims":{AcceptedPolicyVersion:[4,5,1,""],Aud:[4,5,1,""],Bans:[4,5,1,""],ClientId:[4,5,1,""],Country:[4,5,1,""],DisplayName:[4,5,1,""],Exp:[4,5,1,""],Iat:[4,5,1,""],IsComply:[4,5,1,""],Jflgs:[4,5,1,""],Namespace:[4,5,1,""],NamespaceRoles:[4,5,1,""],Permissions:[4,5,1,""],Roles:[4,5,1,""],Scope:[4,5,1,""],Sub:[4,5,1,""]},"iam_python_sdk.models.Model":{loads:[4,6,1,""]},"iam_python_sdk.models.NamespaceRole":{Namespace:[4,5,1,""],Roleid:[4,5,1,""]},"iam_python_sdk.models.Permission":{Action:[4,5,1,""],Resource:[4,5,1,""],Schedaction:[4,5,1,""],Schedcron:[4,5,1,""],Schedrange:[4,5,1,""],is_in_range:[4,2,1,""],is_recurring:[4,2,1,""],is_scheduled:[4,2,1,""]},"iam_python_sdk.models.RevocationList":{RevokedTokens:[4,5,1,""],RevokedUsers:[4,5,1,""]},"iam_python_sdk.models.Role":{Permissions:[4,5,1,""],Roleid:[4,5,1,""],Rolename:[4,5,1,""]},"iam_python_sdk.models.TokenResponse":{AcceptedPolicyVersion:[4,5,1,""],AccessToken:[4,5,1,""],Bans:[4,5,1,""],DisplayName:[4,5,1,""],ExpiresIn:[4,5,1,""],IsComply:[4,5,1,""],Jflgs:[4,5,1,""],Namespace:[4,5,1,""],NamespaceRoles:[4,5,1,""],Permissions:[4,5,1,""],PlatformId:[4,5,1,""],PlatformUserId:[4,5,1,""],RefreshToken:[4,5,1,""],Roles:[4,5,1,""],TokenType:[4,5,1,""],UserId:[4,5,1,""]},"iam_python_sdk.models.UserRevocationListRecord":{Id:[4,5,1,""],RevokedAt:[4,5,1,""]},"iam_python_sdk.task":{Task:[4,1,1,""]},"iam_python_sdk.task.Task":{start:[4,2,1,""],stop:[4,2,1,""]},"iam_python_sdk.utils":{decode_model:[4,3,1,""],parse_nanotimestamp:[4,3,1,""]},iam_python_sdk:{Config:[4,1,1,""],NewDefaultClient:[4,1,1,""],bloom:[4,0,0,"-"],cache:[4,0,0,"-"],cli:[4,0,0,"-"],client:[4,0,0,"-"],config:[4,0,0,"-"],errors:[4,0,0,"-"],flask:[4,0,0,"-"],log:[4,0,0,"-"],models:[4,0,0,"-"],task:[4,0,0,"-"],utils:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception","5":"py:attribute","6":"py:classmethod"},terms:{"class":4,"default":[3,4],"float":4,"function":[2,4,8],"import":[3,8],"int":4,"new":2,"public":6,"return":[3,4],"true":[3,4],"try":8,For:[3,8],The:[0,2,3,4,6,8],Then:[2,3,8],There:8,These:3,Used:4,Using:8,__name__:3,about:[2,3,4],accelbyt:[0,2,4,5,6,8],acceptedpolicyvers:4,access:[1,3,4,5],access_token:[3,8],accesstoken:4,accord:3,account:5,action:[3,4,8],activ:4,add:[1,2],added:4,addit:4,admin:8,all:[0,2,3],allow:[3,8],also:3,alwai:[2,6],analyt:0,ani:[2,4],anonym:4,anystr:4,anyth:2,apach:5,api:5,app:[3,4,5],applic:3,appreci:2,arg:4,articl:2,assum:[2,8],aud:4,audienc:[1,4,5],audreyr:0,author:3,avail:4,backgroud:1,background:[4,5],backoff:4,backoff_giveup_handl:4,ban:[1,4,5],ban_statu:8,bantyp:4,base:[3,4,8],baseuri:4,baseurl:[4,8],bearer:[3,4],been:[3,4,6,8],befor:[2,6,8],best:2,bit:2,blog:2,bloom:7,bloomfilt:4,bool:4,branch:2,bugfix:2,build:5,bump2vers:2,cach:7,call:[4,8],callabl:4,caller:4,can:[0,2,3,4,6,8],cant:8,certain:4,chang:2,changelog:[2,5],check:[2,3,4,5],checkout:2,claim:[1,4,8],classmethod:4,cli:7,client:[1,3,5,7],clientid:[4,8],clientinfocach:4,clientinform:4,clientnam:4,clientsecret:[4,8],clienttoken:[4,8],clienttokengr:[4,8],clienttokengranterror:[4,8],clone:[2,6],collect:4,com:[0,2,6],command:6,commit:2,config:[3,7,8],configur:3,consol:4,contain:4,content:[5,7],contribut:5,contributor:5,control:3,cooki:[3,4],cookiecutt:0,copi:[2,6],cor:[1,4,5],cors_opt:[3,4],could:2,countri:4,creat:2,create_app:3,cred:4,credenti:3,credeti:8,credit:[2,5],csrf:[1,4,5],csrf_protect:[3,4],curl:6,custom:[3,8],daemon:4,data:4,date:3,datetim:4,debug:4,decod:4,decode_model:4,decor:[3,4],def:3,defaultcli:4,demo:8,deni:4,deploi:5,deploy:3,descript:2,detail:2,develop:[2,3,5],devic:3,dict:4,displaynam:4,doc:2,docstr:2,document:[5,8],doesn:4,domain:8,don:6,done:2,download:6,driven:2,easier:2,either:6,email:[1,4,5],email_verifi:8,empti:4,emptytokenerror:4,enabl:[3,4,8],enddat:4,endpoint:[3,4],enhanc:2,entri:[2,4],environ:6,error:[7,8],even:2,everi:2,exampl:[4,8],except:[4,8],execut:4,exist:4,exp:4,expir:4,expiresin:4,explain:2,extens:[3,4],extra:1,factori:3,fail:4,fals:4,featur:4,feel:0,fetch:4,field:4,file:2,filer:4,filter:4,first:[4,8],fix:1,flag:4,flake8:2,flask:[1,5,6,7],flow:8,forbidden:4,forbiddenerror:4,fork:2,format:4,found:[4,8],framework:[1,5],free:[0,5],fri:3,from:[3,4,5,8],gener:5,get:[1,3,4,5,8],get_cors_endpoint:3,get_protected_endpoint:3,getclientinform:4,getclientinformationerror:4,getjwkserror:4,getrevocationlisterror:4,getrolepermiss:4,getrolepermissionerror:4,git:[2,6],github:[0,2,5,6],given:2,gmt:3,grant:[1,4,5],graph:0,greatli:2,gthread:3,guid:6,guidelin:5,gunicorn:3,has:[1,3,4],hasban:[4,8],have:[2,3,4,6,8],header:[3,4],health:4,healthcheck:4,help:[2,5],here:[2,3,4],hold:4,how:2,html:8,http:[0,2,3,4,5,6,8],httpclient:4,httpclienterror:4,httpx:4,iam:[0,2,3,4,6],iam_base_url:3,iam_client_id:3,iam_client_secret:3,iam_cors_credenti:3,iam_cors_en:3,iam_cors_head:3,iam_cors_method:3,iam_cors_origin:3,iam_csrf_protect:[3,4],iam_python_sdk:[2,3,5,7,8],iam_strict_refer:3,iam_token_cookie_nam:3,iam_token_cookie_path:3,iam_token_header_nam:3,iam_token_header_typ:3,iam_token_loc:3,iat:4,ietf:8,implement:[4,8],includ:2,index:5,info:[4,5],inform:[1,3,4],init:[3,4,5],init_app:[3,4],initi:8,insert:4,instal:[2,5],instanc:4,insuffici:4,interv:4,invalid:[4,8],invalidauderror:4,invalidscopeerror:4,invalidtokensignaturekeyerror:4,is_expir:4,is_in_rang:4,is_recur:4,is_schedul:4,is_token_valid:8,iscompli:4,issu:2,item:4,jflg:4,json:4,just:2,justic:[0,4],jwk:[1,4,5,8],jwksrefreshinterv:4,jwt:[4,8],jwt_claim:4,jwtban:4,jwtclaim:4,keep:2,kei:4,kit:5,know:4,kwarg:4,latest:6,let:4,licens:5,like:[3,8],list:[0,1,2,4,5,8],littl:2,live:[4,5,8],load:[4,8],local:[1,2,4,5,8],locali:8,log:7,look:[2,4],maintain:[2,5],major:2,make:[2,3,4,5,6],manag:5,mani:[0,2,8],master:6,match:4,meet:2,messag:4,method:[3,4,6,8],might:2,minor:2,mkvirtualenv:2,model:7,modul:[3,5,7],more:[2,3,8],most:6,multithread:3,name:2,namespac:[3,4,8],namespacerol:4,nanosecond:4,narrow:2,need:[3,4,8],net:0,newdefaultcli:[4,8],nginx:3,nil:4,nilclaimerror:4,nolocalvalidationerror:[4,8],none:4,nonetyp:4,note:4,nov:3,now:2,oauth:8,object:4,offici:2,ojl:6,onc:[4,6,8],onli:4,open:2,oper:2,option:[1,4,5],order:4,ordereddict:4,org:8,origin:[2,3],other:[2,8],output:8,overrid:4,overridden:3,own:[5,8],owner:8,packag:[0,5,7],page:[0,3,5],pars:[1,4,8],parse_nanotimestamp:4,part:2,pass:[2,8],patch:2,pattern:3,perform:4,period:4,permiss:[1,4,5],permission_resourc:[4,8],permissionresourc:4,permssion:4,phone:[1,4,5],phone_verifi:8,pip:[2,6],placehold:4,platformid:4,platformuserid:4,pleas:[2,3,6,8],portal:8,possibl:2,post:[2,3,4],prefer:6,preflight_opt:4,prerequisit:5,process:6,product:3,project:[0,2,8],properti:8,propos:2,protect:[3,4,5],pull:5,pull_request:2,push:2,put:2,pypackag:0,pypi:2,pytest:2,python:[0,2,3,4,6,8],rais:4,reach:0,read:[3,8],readi:2,readm:2,recent:6,record:4,redirecturi:4,refer:4,refresh:[1,4,5],refreshaccesstokenerror:4,refreshtoken:4,releas:5,rememb:[2,4],remind:2,repeat:4,repetit:4,replac:4,repo:[2,6],repositori:6,reproduc:2,reqscop:4,request:[4,5],requir:[1,4,5,8],required_permiss:[4,8],required_role_id:8,required_scop:8,requiredpermiss:4,requiredroleid:4,resourc:[3,4,8],respons:[3,4],revoc:[1,4,5,8],revocationlist:4,revocationlistrefreshinterv:4,revok:4,revokedat:4,revokedtoken:4,revokedus:4,rfc7519:8,right:4,role:[1,4,5],roleid:4,rolenam:4,rolenotfounderror:4,rolepermissioncach:4,rolescacheexpirationtim:4,rout:3,rst:2,run:[2,6],safe:4,sampl:[3,8],sample_role_id_12345:8,sample_scop:8,schedact:4,schedcron:4,schedrang:4,scope:[1,2,4,5],script:4,sdk:[0,2,3,4,6,8],search:5,second:[4,8],secret:[3,8],section:8,seen:0,send:2,server:3,servic:[3,4,5,8],set:[2,3,4,8],setup:[2,6],should:[2,8],signatur:4,sinc:3,softwar:5,sourc:[4,5],spawn:4,specif:[3,4,8],stabl:5,start:[1,4,5],startlocalvalid:[4,8],startlocalvalidationerror:[4,8],statu:[1,4,5],step:2,stop:4,store:[4,8],str:4,string:[4,8],sub:[4,8],subclass:4,submodul:7,subset:2,success:[4,8],suffici:4,support:[1,2,3,4,5,6],sure:[2,3,4,6],sync:3,system:2,tag:2,tarbal:6,task:7,team:0,templat:0,termin:6,test:[2,3,6],test_iam_python_sdk:2,thank:0,thei:2,them:2,thi:[0,2,3,4,6,8],thread:[3,4],through:[2,6],time:4,tip:5,token:[1,3,4,5],token_requir:[3,4],tokenrespons:4,tokenrevokederror:4,tokentyp:4,tool:8,tox:2,travi:2,troubleshoot:2,ttl:4,two:8,type:[3,4,5,8],unauthor:[3,4],unauthorizederror:4,union:4,updat:[2,8],uri:4,url:[3,8],usag:5,use:[2,3,5,8],user:[3,4,5],user_anonym:8,useranonymousstatu:[4,8],useremailverificationstatu:[4,8],userid:[3,4,8],userphoneverificationstatu:[4,8],userrevocationlistrecord:4,userrevokederror:4,using:[4,5,8],util:7,uwsgi:3,valid:[1,4,5],valid_permiss:8,valid_rol:8,validate_permiss:4,validate_refer:4,validate_token_in_request:4,validateaccesstoken:[4,8],validateaccesstokenerror:[4,8],validateandparseclaim:[4,8],validateandparseclaimserror:[4,8],validateaudi:[4,8],validateaudienceerror:[4,8],validatejwterror:4,validatepermiss:[4,8],validatepermissionerror:[4,8],validaterol:[4,8],validatescop:[4,8],validatescopeerror:[4,8],valu:[4,8],valueerror:4,verif:[1,4,8],verifi:5,version:[2,6],virtualenv:2,virtualenvwrapp:2,volunt:2,wai:2,want:2,web:2,websit:2,welcom:2,were:4,when:[2,3,4],wherein:8,whether:2,whoever:2,wide:[3,4],work:2,worker:3,would:[2,3],wsgi:3,xxx:4,you:[2,3,4,6,8],your:[2,3,6,8],your_name_her:2},titles:["Credits","Changelog","Contributing","Frameworks","iam_python_sdk package","IAM Python SDK","Installation","API Documentation","Usage"],titleterms:{access:8,anonym:8,api:7,audienc:8,ban:8,bloom:4,bug:2,cach:4,changelog:1,check:8,cli:4,client:[4,8],config:4,content:4,contribut:2,contributor:0,cor:3,credit:0,deploi:2,document:[2,7],email:8,error:4,featur:[2,5],feedback:2,fix:2,flask:[3,4],framework:[3,6],from:6,gener:0,get:2,grant:8,guidelin:2,iam:[5,8],iam_python_sdk:4,implement:2,indic:5,info:8,init:8,instal:6,log:4,maintain:0,model:4,modul:4,option:3,packag:4,permiss:8,phone:8,prerequisit:8,pull:2,python:5,releas:6,report:2,request:2,requir:6,role:8,scope:8,sdk:5,sourc:6,stabl:6,start:2,statu:8,submit:2,submodul:4,tabl:5,task:4,tip:2,token:8,type:2,usag:[3,8],user:8,util:4,valid:8,verifi:8,write:2}})