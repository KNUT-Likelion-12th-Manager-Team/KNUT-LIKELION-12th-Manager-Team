package org.LLManagement.Models;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


//수정필요
public class AttendanceManager extends DatabaseSetting {
    public void AttendanceChecking(int user_id) {
        Connection con = null;
        PreparedStatement st = null;
        ResultSet rs = null;

        LocalDate date = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        String formatedNow = date.format(formatter);

        try {
            Class.forName(SQL_DRIVER);
            con = DriverManager.getConnection(SQL_URL, SQL_USER, SQL_PW);

            String sql = "INSERT INTO attendance_check VALUES (?, ?)";
            st = con.prepareStatement(sql);
            st.setInt(1, user_id);
            System.out.println(formatedNow);
            st.setInt(2, Integer.parseInt(formatedNow));
            rs = st.executeQuery();
            rs.next();

            close(rs, st, con);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            close(rs, st, con);
        }
    }

    //출석체크 확인 (특정날짜 확인)
    public boolean AttendanceChecked(int user_id, int date) {
        Connection con = null;
        PreparedStatement st = null;
        ResultSet rs = null;
        int result = -1;
        try {
            Class.forName(SQL_DRIVER);
            con = DriverManager.getConnection(SQL_URL, SQL_USER, SQL_PW);

            String sql = "SELECT datetime FROM attendance_check WHERE ID=?";
            st = con.prepareStatement(sql);
            st.setInt(1, user_id);
            rs = st.executeQuery();
            rs.next();
            result = rs.getInt("datetime");

            close(rs, st, con);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            close(rs, st, con);
        }

        if (result == date) {
            return true;
        } else {
            return false;
        }
    }
}
