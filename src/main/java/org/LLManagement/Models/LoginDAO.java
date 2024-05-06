package org.LLManagement.Models;

import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@Repository
public class LoginDAO extends  DatabaseSetting{
    public LoginVO login(int user_id, int user_pw) {
        Connection con = null;
        PreparedStatement st = null;
        ResultSet rs = null;

        String name = null; // 이름 리턴
        LoginVO loginVO = null;

        try {
            Class.forName(SQL_DRIVER);
            con = DriverManager.getConnection(SQL_URL, SQL_USER, SQL_PW);

            String sql = "SELECT * FROM accounts WHERE ID=? AND PW=?";
            st = con.prepareStatement(sql);
            st.setInt(1, user_id);
            st.setInt(2, user_pw);
            rs = st.executeQuery();
            rs.next();

            //LoginVO 객체에 유저정보 담기
            loginVO = new LoginVO(rs.getInt("ID"), rs.getInt("PW"), rs.getString("name"));

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            close(rs, st, con);
        }

        return loginVO;
    }
}
