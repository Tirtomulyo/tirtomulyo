import { 
    Card, 
    CardContent, 
    Chip, 
    makeStyles, 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableRow, 
    Toolbar, 
    Typography 
} from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    card: {
        padding: 0
    },
    title: {
        flex: '1 1 100%',
    }
}))
function BookingCard() {
    const classes = useStyle()
    return (
        <Card
            className={classes.card}
        >
            <CardContent>
            <Toolbar className={classes.root}>
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                  Arifin Nadhif
                </Typography>
                <Chip 
                    label="booked" 
                    color="primary" 
                    variant="outlined"
                />
            </Toolbar>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row"> Alamat Pemesan </TableCell>
                                <TableCell align="right"> Semarang </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"> Total Pemesan/Paket </TableCell>
                                <TableCell align="right"> 10 / Paket A </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"> Tanggal Pemesanan </TableCell>
                                <TableCell align="right"> 10 Desember 2021 </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"> Tanggal Pembelian </TableCell>
                                <TableCell align="right"> 20 Desember 2021 </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default BookingCard
