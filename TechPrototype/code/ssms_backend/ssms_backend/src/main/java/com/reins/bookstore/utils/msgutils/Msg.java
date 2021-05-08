package com.reins.bookstore.utils.msgutils;

import net.sf.json.JSONObject;

/**
 * @ClassName Msg
 * @Description Msg Class
 * @Author thunderBoy
 * @Date 2019/11/7 14:36
 */
public class Msg {
    private int status;
    private String msg;
    private JSONObject data;

    Msg(MsgCode msg, JSONObject data){
        this.status = msg.getStatus();
        this.msg = msg.getMsg();
        this.data = data;
    }

    Msg(MsgCode msg, String extra, JSONObject data){
        this.status = msg.getStatus();
        this.msg = extra;
        this.data = data;
    }

    Msg(MsgCode msg){
        this.status = msg.getStatus();
        this.msg = msg.getMsg();
        this.data = null;
    }

    Msg(MsgCode msg, String extra){
        this.status = msg.getStatus();
        this.msg = extra;
        this.data = null;
    }

    Msg(int status, String extra, JSONObject data){
        this.status = status;
        this.msg = extra;
        this.data = data;
    }

    Msg(int status, String extra){
        this.status = status;
        this.msg = extra;
        this.data = null;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public JSONObject getData() {
        return data;
    }

    public void setData(JSONObject data) {
        this.data = data;
    }






}
