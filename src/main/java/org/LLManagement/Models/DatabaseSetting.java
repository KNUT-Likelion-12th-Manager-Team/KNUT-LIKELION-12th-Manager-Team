package org.LLManagement.Models;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class DatabaseSetting {
    //해당 클래스는 암호화해서 빼놔야지 파일로
    public static final String SQL_DRIVER = "org.mariadb.jdbc.Driver";
    public static final String SQL_URL = "jdbc:mariadb://localhost:3306/llmanagement";
    public static final String SQL_USER = "knut_likelion";
    public static final String SQL_PW = "knut_likelion";

    public void close(ResultSet rs, Statement st, Connection con) {
        try {
            rs.close();
        } catch (Exception e) {
        }

        try {
            st.close();
        } catch (Exception e) {
        }

        try {
            con.close();
        } catch (Exception e) {
        }
    }
}
