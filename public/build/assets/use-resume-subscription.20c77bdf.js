import{v as r,G as o,J as i,m as e,L as u,d as c}from"./main.2bd0a4cf.js";function b(){const{trans:n}=r();return o(s=>a(s),{onSuccess:(s,t)=>{i(t.delete?n(e("Subscription deleted.")):n(e("Subscription cancelled.")))},onError:s=>u(s)})}function a({subscriptionId:n,...s}){return c.post(`billing/subscriptions/${n}/cancel`,s).then(t=>t.data)}function S(){const{trans:n}=r();return o(s=>p(s),{onSuccess:()=>{i(n(e("Subscription renewed.")))},onError:s=>u(s)})}function p({subscriptionId:n}){return c.post(`billing/subscriptions/${n}/resume`).then(s=>s.data)}export{S as a,b as u};
//# sourceMappingURL=use-resume-subscription.20c77bdf.js.map
