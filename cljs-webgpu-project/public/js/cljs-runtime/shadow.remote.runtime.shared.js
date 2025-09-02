goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14790){
var map__14791 = p__14790;
var map__14791__$1 = cljs.core.__destructure_map(map__14791);
var runtime = map__14791__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14791__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14944 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14944)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14803 = runtime;
var G__14804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14944);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14803,G__14804) : shadow.remote.runtime.shared.process.call(null,G__14803,G__14804));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14809,res){
var map__14810 = p__14809;
var map__14810__$1 = cljs.core.__destructure_map(map__14810);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14810__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14810__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14815 = res;
var G__14815__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14815,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14815);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14815__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14815__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14821 = arguments.length;
switch (G__14821) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14823,msg,handlers,timeout_after_ms){
var map__14824 = p__14823;
var map__14824__$1 = cljs.core.__destructure_map(map__14824);
var runtime = map__14824__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14824__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14961 = arguments.length;
var i__5750__auto___14963 = (0);
while(true){
if((i__5750__auto___14963 < len__5749__auto___14961)){
args__5755__auto__.push((arguments[i__5750__auto___14963]));

var G__14965 = (i__5750__auto___14963 + (1));
i__5750__auto___14963 = G__14965;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14832,ev,args){
var map__14833 = p__14832;
var map__14833__$1 = cljs.core.__destructure_map(map__14833);
var runtime = map__14833__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14833__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14834 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14837 = null;
var count__14838 = (0);
var i__14839 = (0);
while(true){
if((i__14839 < count__14838)){
var ext = chunk__14837.cljs$core$IIndexed$_nth$arity$2(null,i__14839);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14969 = seq__14834;
var G__14970 = chunk__14837;
var G__14971 = count__14838;
var G__14972 = (i__14839 + (1));
seq__14834 = G__14969;
chunk__14837 = G__14970;
count__14838 = G__14971;
i__14839 = G__14972;
continue;
} else {
var G__14973 = seq__14834;
var G__14974 = chunk__14837;
var G__14975 = count__14838;
var G__14976 = (i__14839 + (1));
seq__14834 = G__14973;
chunk__14837 = G__14974;
count__14838 = G__14975;
i__14839 = G__14976;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14834);
if(temp__5823__auto__){
var seq__14834__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14834__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__14834__$1);
var G__14977 = cljs.core.chunk_rest(seq__14834__$1);
var G__14978 = c__5548__auto__;
var G__14979 = cljs.core.count(c__5548__auto__);
var G__14980 = (0);
seq__14834 = G__14977;
chunk__14837 = G__14978;
count__14838 = G__14979;
i__14839 = G__14980;
continue;
} else {
var ext = cljs.core.first(seq__14834__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14983 = cljs.core.next(seq__14834__$1);
var G__14984 = null;
var G__14985 = (0);
var G__14986 = (0);
seq__14834 = G__14983;
chunk__14837 = G__14984;
count__14838 = G__14985;
i__14839 = G__14986;
continue;
} else {
var G__14987 = cljs.core.next(seq__14834__$1);
var G__14988 = null;
var G__14989 = (0);
var G__14990 = (0);
seq__14834 = G__14987;
chunk__14837 = G__14988;
count__14838 = G__14989;
i__14839 = G__14990;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14827){
var G__14828 = cljs.core.first(seq14827);
var seq14827__$1 = cljs.core.next(seq14827);
var G__14829 = cljs.core.first(seq14827__$1);
var seq14827__$2 = cljs.core.next(seq14827__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14828,G__14829,seq14827__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14858,p__14859){
var map__14860 = p__14858;
var map__14860__$1 = cljs.core.__destructure_map(map__14860);
var runtime = map__14860__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14861 = p__14859;
var map__14861__$1 = cljs.core.__destructure_map(map__14861);
var msg = map__14861__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14861__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14862 = cljs.core.deref(state_ref);
var map__14862__$1 = cljs.core.__destructure_map(map__14862);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14862__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14862__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14866,msg){
var map__14868 = p__14866;
var map__14868__$1 = cljs.core.__destructure_map(map__14868);
var runtime = map__14868__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14868__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14878,key,p__14879){
var map__14880 = p__14878;
var map__14880__$1 = cljs.core.__destructure_map(map__14880);
var state = map__14880__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14880__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14881 = p__14879;
var map__14881__$1 = cljs.core.__destructure_map(map__14881);
var spec = map__14881__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14885,key,spec){
var map__14886 = p__14885;
var map__14886__$1 = cljs.core.__destructure_map(map__14886);
var runtime = map__14886__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14886__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___14991 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___14991 == null)){
} else {
var on_welcome_14992 = temp__5827__auto___14991;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14992.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14992.cljs$core$IFn$_invoke$arity$0() : on_welcome_14992.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14891_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14891_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14892_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14892_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14893_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14893_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14894_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14894_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14895_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14895_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14900,key){
var map__14902 = p__14900;
var map__14902__$1 = cljs.core.__destructure_map(map__14902);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14902__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14907,msg){
var map__14908 = p__14907;
var map__14908__$1 = cljs.core.__destructure_map(map__14908);
var runtime = map__14908__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14908__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14914,p__14915){
var map__14917 = p__14914;
var map__14917__$1 = cljs.core.__destructure_map(map__14917);
var runtime = map__14917__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14917__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14918 = p__14915;
var map__14918__$1 = cljs.core.__destructure_map(map__14918);
var msg = map__14918__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14918__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14918__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14923 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14925 = null;
var count__14926 = (0);
var i__14927 = (0);
while(true){
if((i__14927 < count__14926)){
var map__14937 = chunk__14925.cljs$core$IIndexed$_nth$arity$2(null,i__14927);
var map__14937__$1 = cljs.core.__destructure_map(map__14937);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14937__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15011 = seq__14923;
var G__15012 = chunk__14925;
var G__15013 = count__14926;
var G__15014 = (i__14927 + (1));
seq__14923 = G__15011;
chunk__14925 = G__15012;
count__14926 = G__15013;
i__14927 = G__15014;
continue;
} else {
var G__15015 = seq__14923;
var G__15016 = chunk__14925;
var G__15017 = count__14926;
var G__15018 = (i__14927 + (1));
seq__14923 = G__15015;
chunk__14925 = G__15016;
count__14926 = G__15017;
i__14927 = G__15018;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14923);
if(temp__5823__auto__){
var seq__14923__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14923__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__14923__$1);
var G__15019 = cljs.core.chunk_rest(seq__14923__$1);
var G__15020 = c__5548__auto__;
var G__15021 = cljs.core.count(c__5548__auto__);
var G__15022 = (0);
seq__14923 = G__15019;
chunk__14925 = G__15020;
count__14926 = G__15021;
i__14927 = G__15022;
continue;
} else {
var map__14942 = cljs.core.first(seq__14923__$1);
var map__14942__$1 = cljs.core.__destructure_map(map__14942);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14942__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15023 = cljs.core.next(seq__14923__$1);
var G__15024 = null;
var G__15025 = (0);
var G__15026 = (0);
seq__14923 = G__15023;
chunk__14925 = G__15024;
count__14926 = G__15025;
i__14927 = G__15026;
continue;
} else {
var G__15027 = cljs.core.next(seq__14923__$1);
var G__15028 = null;
var G__15029 = (0);
var G__15030 = (0);
seq__14923 = G__15027;
chunk__14925 = G__15028;
count__14926 = G__15029;
i__14927 = G__15030;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
