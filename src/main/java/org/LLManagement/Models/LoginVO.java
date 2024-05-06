package org.LLManagement.Models;



public class LoginVO {
    private int ID;
    private int PW;
    private String name;

    public LoginVO() {}

    public LoginVO(int ID, int PW, String name) {
        this.ID = ID;
        this.PW = PW;
        this.name = name;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public int getPW() {
        return PW;
    }

    public void setPW(int PW) {
        this.PW = PW;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
