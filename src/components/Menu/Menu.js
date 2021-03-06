import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link, AnimateScroll as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      width: 240,
      flexShrink: 0
    },
    drawerPaper: {
      width: 200,
      marginTop: 70
    },
    menuItem: {
        fontSize: 25,
        marginBottom: 10
    },
    header: {
        fontSize: 40
    },
    sectionHeader: {
        fontSize: 30
    },
    toolbar: theme.mixins.toolbar,
  }));

export default function Menu() {
    const classes = useStyles();

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}} anchor="left">
                <div className={classes.toolbar} />
                <List>
                    <ListItem button className={classes.menuItem} key="cakes">
                        <Link activeClass="active" to="cakes" spy={true} smooth={true} offset={-70} duration={500}>
                            Cakes
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.menuItem} key="breakableHearts">
                        <Link activeClass="active" to="breakableHearts" spy={true} smooth={true} offset={-70} duration={1000}>
                            Breakable Hearts
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.menuItem} key="sweetTreats">
                        <Link activeClass="active" to="sweetTreats" spy={true} smooth={true} offset={-70} duration={1000}>
                            Sweet Treats
                        </Link>
                    </ListItem>
                </List>
                </Drawer>
                <div className={classes.toolbar} style = {{ marginLeft: 250 , marginRight: 50}}>
                    <Grid container spacing={1} style = {{ marginTop: 100, justifyContent:'center', alignItems: 'center' }}>
                        <div className={classes.header}>Yumfullness Menu</div>
                    </Grid>
                    <div className="section-content" id="cakes" style = {{ marginTop: 30 }}>
                        <div className={classes.sectionHeader}>Cakes</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu tortor, tristique iaculis est eget, suscipit rhoncus ipsum. 
                            Aenean lobortis lorem non quam laoreet convallis. Vestibulum vitae suscipit purus. Duis dapibus, ex at porta malesuada, 
                            elit lorem lobortis magna, ac fermentum enim mi eget justo. Curabitur sit amet interdum nibh. Donec non erat porttitor,
                            ultricies felis in, sodales tortor. Sed gravida rutrum ultrices. Phasellus vitae dui neque. Curabitur congue, enim sit amet 
                            gravida gravida, felis dui efficitur felis, vitae viverra dui massa vel massa. Maecenas imperdiet convallis ipsum eu facilisis. 
                            Nulla non aliquet tellus. Cras cursus, leo a consectetur ultrices, felis nibh mollis risus, vitae varius sem dui in mauris. 
                            Ut at ornare orci. In lacinia turpis vitae ex efficitur luctus. Ut finibus tincidunt erat id maximus. In hac habitasse platea 
                            dictumst. Curabitur dolor turpis, aliquet commodo feugiat blandit, vehicula sit amet metus. Quisque at lectus et turpis condimentum 
                            hendrerit vel quis velit. Duis eu dui eget dui vehicula gravida vitae in felis. Nunc vel finibus mauris. Sed porttitor est sed 
                            ligula viverra luctus. Nullam tempor ornare hendrerit. Proin aliquam erat neque, vitae tristique tortor dapibus vel. Fusce sed 
                            fermentum mi. Proin vulputate quis ante non hendrerit. Aenean pulvinar malesuada mi sit amet accumsan. Mauris hendrerit laoreet 
                            tincidunt. Nulla ac tempor tellus, sed cursus nibh. Nam aliquam sapien turpis, sit amet sollicitudin ipsum iaculis vitae. 
                            Phasellus ac urna feugiat, luctus elit ut, sagittis ante. Suspendisse non molestie justo, tincidunt lacinia nisi. Aliquam in 
                            commodo diam. Mauris turpis odio, pellentesque a semper sit amet, sodales fermentum nisl. Sed sed lacus quis nunc lobortis 
                            pellentesque. Quisque eu dui sit amet nunc venenatis viverra id a felis. Duis posuere neque ultrices diam pellentesque efficitur. 
                            Morbi ac blandit libero. Nulla euismod scelerisque nisl, nec luctus leo tincidunt quis. Etiam in cursus est, id maximus neque. 
                            Curabitur dictum massa nunc, in volutpat elit consequat cursus. Quisque at porttitor ipsum. Donec sit amet consectetur tortor. 
                            Ut mattis, orci eget eleifend euismod, nisl turpis vulputate neque, nec eleifend urna turpis non risus. Curabitur neque nulla, 
                            aliquet vel aliquam sit amet, commodo finibus libero. Suspendisse ultricies dictum mauris at dictum. Nam orci enim, rutrum sit 
                            amet varius eu, sagittis ac lorem. Maecenas sed condimentum sapien. Maecenas non eleifend risus. Vestibulum lacus dolor, egestas 
                            ac diam in, tempus sagittis urna. Curabitur lacinia congue magna in euismod. Nullam molestie massa ac justo efficitur, in 
                            pellentesque sem ultrices. Nulla suscipit, lectus sed tristique hendrerit, diam massa sagittis mi, id pulvinar tellus ante 
                            tincidunt turpis. Proin vulputate sed dolor et tincidunt. Aenean pretium aliquet dolor, ultrices pharetra justo imperdiet in.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu tortor, tristique iaculis est eget, suscipit rhoncus ipsum. 
                            Aenean lobortis lorem non quam laoreet convallis. Vestibulum vitae suscipit purus. Duis dapibus, ex at porta malesuada, 
                            elit lorem lobortis magna, ac fermentum enim mi eget justo. Curabitur sit amet interdum nibh. Donec non erat porttitor,
                            ultricies felis in, sodales tortor. Sed gravida rutrum ultrices. Phasellus vitae dui neque. Curabitur congue, enim sit amet 
                            gravida gravida, felis dui efficitur felis, vitae viverra dui massa vel massa. Maecenas imperdiet convallis ipsum eu facilisis. 
                            Nulla non aliquet tellus. Cras cursus, leo a consectetur ultrices, felis nibh mollis risus, vitae varius sem dui in mauris. 
                            Ut at ornare orci. In lacinia turpis vitae ex efficitur luctus. Ut finibus tincidunt erat id maximus. In hac habitasse platea 
                            dictumst. Curabitur dolor turpis, aliquet commodo feugiat blandit, vehicula sit amet metus. Quisque at lectus et turpis condimentum 
                            hendrerit vel quis velit. Duis eu dui eget dui vehicula gravida vitae in felis. Nunc vel finibus mauris. Sed porttitor est sed 
                            ligula viverra luctus. Nullam tempor ornare hendrerit. Proin aliquam erat neque, vitae tristique tortor dapibus vel. Fusce sed 
                            fermentum mi. Proin vulputate quis ante non hendrerit. Aenean pulvinar malesuada mi sit amet accumsan. Mauris hendrerit laoreet 
                            tincidunt. Nulla ac tempor tellus, sed cursus nibh. Nam aliquam sapien turpis, sit amet sollicitudin ipsum iaculis vitae. 
                            Phasellus ac urna feugiat, luctus elit ut, sagittis ante. Suspendisse non molestie justo, tincidunt lacinia nisi. Aliquam in 
                            commodo diam. Mauris turpis odio, pellentesque a semper sit amet, sodales fermentum nisl. Sed sed lacus quis nunc lobortis 
                            pellentesque. Quisque eu dui sit amet nunc venenatis viverra id a felis. Duis posuere neque ultrices diam pellentesque efficitur. 
                            Morbi ac blandit libero. Nulla euismod scelerisque nisl, nec luctus leo tincidunt quis. Etiam in cursus est, id maximus neque. 
                            Curabitur dictum massa nunc, in volutpat elit consequat cursus. Quisque at porttitor ipsum. Donec sit amet consectetur tortor. 
                            Ut mattis, orci eget eleifend euismod, nisl turpis vulputate neque, nec eleifend urna turpis non risus. Curabitur neque nulla, 
                            aliquet vel aliquam sit amet, commodo finibus libero. Suspendisse ultricies dictum mauris at dictum. Nam orci enim, rutrum sit 
                            amet varius eu, sagittis ac lorem. Maecenas sed condimentum sapien. Maecenas non eleifend risus. Vestibulum lacus dolor, egestas 
                            ac diam in, tempus sagittis urna. Curabitur lacinia congue magna in euismod. Nullam molestie massa ac justo efficitur, in 
                            pellentesque sem ultrices. Nulla suscipit, lectus sed tristique hendrerit, diam massa sagittis mi, id pulvinar tellus ante 
                            tincidunt turpis. Proin vulputate sed dolor et tincidunt. Aenean pretium aliquet dolor, ultrices pharetra justo imperdiet in.
                        </p>
                    </div>
                    <div className="section-content" id="breakableHearts" style = {{ marginTop: 30 }}>
                        <div className={classes.sectionHeader}>Breakable Hearts</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu tortor, tristique iaculis est eget, suscipit rhoncus ipsum. 
                            Aenean lobortis lorem non quam laoreet convallis. Vestibulum vitae suscipit purus. Duis dapibus, ex at porta malesuada, 
                            elit lorem lobortis magna, ac fermentum enim mi eget justo. Curabitur sit amet interdum nibh. Donec non erat porttitor,
                            ultricies felis in, sodales tortor. Sed gravida rutrum ultrices. Phasellus vitae dui neque. Curabitur congue, enim sit amet 
                            gravida gravida, felis dui efficitur felis, vitae viverra dui massa vel massa. Maecenas imperdiet convallis ipsum eu facilisis. 
                            Nulla non aliquet tellus. Cras cursus, leo a consectetur ultrices, felis nibh mollis risus, vitae varius sem dui in mauris. 
                            Ut at ornare orci. In lacinia turpis vitae ex efficitur luctus. Ut finibus tincidunt erat id maximus. In hac habitasse platea 
                            dictumst. Curabitur dolor turpis, aliquet commodo feugiat blandit, vehicula sit amet metus. Quisque at lectus et turpis condimentum 
                            hendrerit vel quis velit. Duis eu dui eget dui vehicula gravida vitae in felis. Nunc vel finibus mauris. Sed porttitor est sed 
                            ligula viverra luctus. Nullam tempor ornare hendrerit. Proin aliquam erat neque, vitae tristique tortor dapibus vel. Fusce sed 
                            fermentum mi. Proin vulputate quis ante non hendrerit. Aenean pulvinar malesuada mi sit amet accumsan. Mauris hendrerit laoreet 
                            tincidunt. Nulla ac tempor tellus, sed cursus nibh. Nam aliquam sapien turpis, sit amet sollicitudin ipsum iaculis vitae. 
                            Phasellus ac urna feugiat, luctus elit ut, sagittis ante. Suspendisse non molestie justo, tincidunt lacinia nisi. Aliquam in 
                            commodo diam. Mauris turpis odio, pellentesque a semper sit amet, sodales fermentum nisl. Sed sed lacus quis nunc lobortis 
                            pellentesque. Quisque eu dui sit amet nunc venenatis viverra id a felis. Duis posuere neque ultrices diam pellentesque efficitur. 
                            Morbi ac blandit libero. Nulla euismod scelerisque nisl, nec luctus leo tincidunt quis. Etiam in cursus est, id maximus neque. 
                            Curabitur dictum massa nunc, in volutpat elit consequat cursus. Quisque at porttitor ipsum. Donec sit amet consectetur tortor. 
                            Ut mattis, orci eget eleifend euismod, nisl turpis vulputate neque, nec eleifend urna turpis non risus. Curabitur neque nulla, 
                            aliquet vel aliquam sit amet, commodo finibus libero. Suspendisse ultricies dictum mauris at dictum. Nam orci enim, rutrum sit 
                            amet varius eu, sagittis ac lorem. Maecenas sed condimentum sapien. Maecenas non eleifend risus. Vestibulum lacus dolor, egestas 
                            ac diam in, tempus sagittis urna. Curabitur lacinia congue magna in euismod. Nullam molestie massa ac justo efficitur, in 
                            pellentesque sem ultrices. Nulla suscipit, lectus sed tristique hendrerit, diam massa sagittis mi, id pulvinar tellus ante 
                            tincidunt turpis. Proin vulputate sed dolor et tincidunt. Aenean pretium aliquet dolor, ultrices pharetra justo imperdiet in.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu tortor, tristique iaculis est eget, suscipit rhoncus ipsum. 
                            Aenean lobortis lorem non quam laoreet convallis. Vestibulum vitae suscipit purus. Duis dapibus, ex at porta malesuada, 
                            elit lorem lobortis magna, ac fermentum enim mi eget justo. Curabitur sit amet interdum nibh. Donec non erat porttitor,
                            ultricies felis in, sodales tortor. Sed gravida rutrum ultrices. Phasellus vitae dui neque. Curabitur congue, enim sit amet 
                            gravida gravida, felis dui efficitur felis, vitae viverra dui massa vel massa. Maecenas imperdiet convallis ipsum eu facilisis. 
                            Nulla non aliquet tellus. Cras cursus, leo a consectetur ultrices, felis nibh mollis risus, vitae varius sem dui in mauris. 
                            Ut at ornare orci. In lacinia turpis vitae ex efficitur luctus. Ut finibus tincidunt erat id maximus. In hac habitasse platea 
                            dictumst. Curabitur dolor turpis, aliquet commodo feugiat blandit, vehicula sit amet metus. Quisque at lectus et turpis condimentum 
                            hendrerit vel quis velit. Duis eu dui eget dui vehicula gravida vitae in felis. Nunc vel finibus mauris. Sed porttitor est sed 
                            ligula viverra luctus. Nullam tempor ornare hendrerit. Proin aliquam erat neque, vitae tristique tortor dapibus vel. Fusce sed 
                            fermentum mi. Proin vulputate quis ante non hendrerit. Aenean pulvinar malesuada mi sit amet accumsan. Mauris hendrerit laoreet 
                            tincidunt. Nulla ac tempor tellus, sed cursus nibh. Nam aliquam sapien turpis, sit amet sollicitudin ipsum iaculis vitae. 
                            Phasellus ac urna feugiat, luctus elit ut, sagittis ante. Suspendisse non molestie justo, tincidunt lacinia nisi. Aliquam in 
                            commodo diam. Mauris turpis odio, pellentesque a semper sit amet, sodales fermentum nisl. Sed sed lacus quis nunc lobortis 
                            pellentesque. Quisque eu dui sit amet nunc venenatis viverra id a felis. Duis posuere neque ultrices diam pellentesque efficitur. 
                            Morbi ac blandit libero. Nulla euismod scelerisque nisl, nec luctus leo tincidunt quis. Etiam in cursus est, id maximus neque. 
                            Curabitur dictum massa nunc, in volutpat elit consequat cursus. Quisque at porttitor ipsum. Donec sit amet consectetur tortor. 
                            Ut mattis, orci eget eleifend euismod, nisl turpis vulputate neque, nec eleifend urna turpis non risus. Curabitur neque nulla, 
                            aliquet vel aliquam sit amet, commodo finibus libero. Suspendisse ultricies dictum mauris at dictum. Nam orci enim, rutrum sit 
                            amet varius eu, sagittis ac lorem. Maecenas sed condimentum sapien. Maecenas non eleifend risus. Vestibulum lacus dolor, egestas 
                            ac diam in, tempus sagittis urna. Curabitur lacinia congue magna in euismod. Nullam molestie massa ac justo efficitur, in 
                            pellentesque sem ultrices. Nulla suscipit, lectus sed tristique hendrerit, diam massa sagittis mi, id pulvinar tellus ante 
                            tincidunt turpis. Proin vulputate sed dolor et tincidunt. Aenean pretium aliquet dolor, ultrices pharetra justo imperdiet in.
                        </p>
                    </div>
                    <div className="section-content" id="sweetTreats" style = {{ marginTop: 30 }}>
                        <div className={classes.sectionHeader}>Sweet Treats</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu tortor, tristique iaculis est eget, suscipit rhoncus ipsum. 
                            Aenean lobortis lorem non quam laoreet convallis. Vestibulum vitae suscipit purus. Duis dapibus, ex at porta malesuada, 
                            elit lorem lobortis magna, ac fermentum enim mi eget justo. Curabitur sit amet interdum nibh. Donec non erat porttitor,
                            ultricies felis in, sodales tortor. Sed gravida rutrum ultrices. Phasellus vitae dui neque. Curabitur congue, enim sit amet 
                            gravida gravida, felis dui efficitur felis, vitae viverra dui massa vel massa. Maecenas imperdiet convallis ipsum eu facilisis. 
                            Nulla non aliquet tellus. Cras cursus, leo a consectetur ultrices, felis nibh mollis risus, vitae varius sem dui in mauris. 
                            Ut at ornare orci. In lacinia turpis vitae ex efficitur luctus. Ut finibus tincidunt erat id maximus. In hac habitasse platea 
                            dictumst. Curabitur dolor turpis, aliquet commodo feugiat blandit, vehicula sit amet metus. Quisque at lectus et turpis condimentum 
                            hendrerit vel quis velit. Duis eu dui eget dui vehicula gravida vitae in felis. Nunc vel finibus mauris. Sed porttitor est sed 
                            ligula viverra luctus. Nullam tempor ornare hendrerit. Proin aliquam erat neque, vitae tristique tortor dapibus vel. Fusce sed 
                            fermentum mi. Proin vulputate quis ante non hendrerit. Aenean pulvinar malesuada mi sit amet accumsan. Mauris hendrerit laoreet 
                            tincidunt. Nulla ac tempor tellus, sed cursus nibh. Nam aliquam sapien turpis, sit amet sollicitudin ipsum iaculis vitae. 
                            Phasellus ac urna feugiat, luctus elit ut, sagittis ante. Suspendisse non molestie justo, tincidunt lacinia nisi. Aliquam in 
                            commodo diam. Mauris turpis odio, pellentesque a semper sit amet, sodales fermentum nisl. Sed sed lacus quis nunc lobortis 
                            pellentesque. Quisque eu dui sit amet nunc venenatis viverra id a felis. Duis posuere neque ultrices diam pellentesque efficitur. 
                            Morbi ac blandit libero. Nulla euismod scelerisque nisl, nec luctus leo tincidunt quis. Etiam in cursus est, id maximus neque. 
                            Curabitur dictum massa nunc, in volutpat elit consequat cursus. Quisque at porttitor ipsum. Donec sit amet consectetur tortor. 
                            Ut mattis, orci eget eleifend euismod, nisl turpis vulputate neque, nec eleifend urna turpis non risus. Curabitur neque nulla, 
                            aliquet vel aliquam sit amet, commodo finibus libero. Suspendisse ultricies dictum mauris at dictum. Nam orci enim, rutrum sit 
                            amet varius eu, sagittis ac lorem. Maecenas sed condimentum sapien. Maecenas non eleifend risus. Vestibulum lacus dolor, egestas 
                            ac diam in, tempus sagittis urna. Curabitur lacinia congue magna in euismod. Nullam molestie massa ac justo efficitur, in 
                            pellentesque sem ultrices. Nulla suscipit, lectus sed tristique hendrerit, diam massa sagittis mi, id pulvinar tellus ante 
                            tincidunt turpis. Proin vulputate sed dolor et tincidunt. Aenean pretium aliquet dolor, ultrices pharetra justo imperdiet in.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu tortor, tristique iaculis est eget, suscipit rhoncus ipsum. 
                            Aenean lobortis lorem non quam laoreet convallis. Vestibulum vitae suscipit purus. Duis dapibus, ex at porta malesuada, 
                            elit lorem lobortis magna, ac fermentum enim mi eget justo. Curabitur sit amet interdum nibh. Donec non erat porttitor,
                            ultricies felis in, sodales tortor. Sed gravida rutrum ultrices. Phasellus vitae dui neque. Curabitur congue, enim sit amet 
                            gravida gravida, felis dui efficitur felis, vitae viverra dui massa vel massa. Maecenas imperdiet convallis ipsum eu facilisis. 
                            Nulla non aliquet tellus. Cras cursus, leo a consectetur ultrices, felis nibh mollis risus, vitae varius sem dui in mauris. 
                            Ut at ornare orci. In lacinia turpis vitae ex efficitur luctus. Ut finibus tincidunt erat id maximus. In hac habitasse platea 
                            dictumst. Curabitur dolor turpis, aliquet commodo feugiat blandit, vehicula sit amet metus. Quisque at lectus et turpis condimentum 
                            hendrerit vel quis velit. Duis eu dui eget dui vehicula gravida vitae in felis. Nunc vel finibus mauris. Sed porttitor est sed 
                            ligula viverra luctus. Nullam tempor ornare hendrerit. Proin aliquam erat neque, vitae tristique tortor dapibus vel. Fusce sed 
                            fermentum mi. Proin vulputate quis ante non hendrerit. Aenean pulvinar malesuada mi sit amet accumsan. Mauris hendrerit laoreet 
                            tincidunt. Nulla ac tempor tellus, sed cursus nibh. Nam aliquam sapien turpis, sit amet sollicitudin ipsum iaculis vitae. 
                            Phasellus ac urna feugiat, luctus elit ut, sagittis ante. Suspendisse non molestie justo, tincidunt lacinia nisi. Aliquam in 
                            commodo diam. Mauris turpis odio, pellentesque a semper sit amet, sodales fermentum nisl. Sed sed lacus quis nunc lobortis 
                            pellentesque. Quisque eu dui sit amet nunc venenatis viverra id a felis. Duis posuere neque ultrices diam pellentesque efficitur. 
                            Morbi ac blandit libero. Nulla euismod scelerisque nisl, nec luctus leo tincidunt quis. Etiam in cursus est, id maximus neque. 
                            Curabitur dictum massa nunc, in volutpat elit consequat cursus. Quisque at porttitor ipsum. Donec sit amet consectetur tortor. 
                            Ut mattis, orci eget eleifend euismod, nisl turpis vulputate neque, nec eleifend urna turpis non risus. Curabitur neque nulla, 
                            aliquet vel aliquam sit amet, commodo finibus libero. Suspendisse ultricies dictum mauris at dictum. Nam orci enim, rutrum sit 
                            amet varius eu, sagittis ac lorem. Maecenas sed condimentum sapien. Maecenas non eleifend risus. Vestibulum lacus dolor, egestas 
                            ac diam in, tempus sagittis urna. Curabitur lacinia congue magna in euismod. Nullam molestie massa ac justo efficitur, in 
                            pellentesque sem ultrices. Nulla suscipit, lectus sed tristique hendrerit, diam massa sagittis mi, id pulvinar tellus ante 
                            tincidunt turpis. Proin vulputate sed dolor et tincidunt. Aenean pretium aliquet dolor, ultrices pharetra justo imperdiet in.
                        </p>
                    </div>

                    <Grid container spacing={1} style = {{ marginTop: 20, marginBottom: 50, justifyContent:'center', alignItems: 'center' }}>
                        <Button
                            href = "/"
                            label = "Submit"
                            variant = "contained"
                            color = "primary"
                            size = "large"
                            style = {{ marginTop: 10, backgroundColor: "#1976d2", color: "#ffffff" }}
                        >
                            Return Home
                        </Button>
                    </Grid>
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    )
}
